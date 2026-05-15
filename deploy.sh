#!/usr/bin/env bash
set -euo pipefail

DOMAIN="pawconcept.es"
EMAIL="admin@pawconcept.es"
APP_PORT="3000"
SERVICE_NAME="pawconcept"
APP_DIR="/var/www/pawconcept"
DEPLOY_USER="${SUDO_USER:-$USER}"

sudo apt-get update -y
sudo apt-get install -y curl nginx certbot python3-certbot-nginx rsync
sudo apt autoremove -y

if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
fi

sudo mkdir -p "$APP_DIR"
sudo chown -R "$DEPLOY_USER:$DEPLOY_USER" "$APP_DIR"
rsync -a --delete --exclude node_modules --exclude .next --exclude .git ./ "$APP_DIR"/
cd "$APP_DIR"

if [ -f .env ]; then
  set -a
  . ./.env
  set +a
fi

export NPM_CONFIG_PRODUCTION=false
npm ci --include=dev
unset NPM_CONFIG_PRODUCTION
if [ -f prisma/schema.prisma ]; then
  npx prisma generate
  if [ -n "${DATABASE_URL:-}" ]; then
    npx prisma migrate deploy
  fi
fi
npm run build

sudo tee /etc/systemd/system/"$SERVICE_NAME".service >/dev/null <<EOF
[Unit]
Description=PawConcept Next.js
After=network.target

[Service]
Type=simple
User=$DEPLOY_USER
WorkingDirectory=$APP_DIR
Environment=NODE_ENV=production
Environment=PORT=$APP_PORT
ExecStart=/usr/bin/npm run start -- -p $APP_PORT
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable --now "$SERVICE_NAME"
sudo systemctl restart "$SERVICE_NAME"

sudo tee /etc/nginx/sites-available/"$DOMAIN" >/dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;
    location / {
        proxy_pass http://127.0.0.1:$APP_PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
}
EOF

sudo ln -sf /etc/nginx/sites-available/"$DOMAIN" /etc/nginx/sites-enabled/"$DOMAIN"
sudo nginx -t
sudo systemctl reload nginx

if pgrep -x certbot >/dev/null 2>&1; then
  while pgrep -x certbot >/dev/null 2>&1; do
    sleep 5
  done
fi
sudo certbot --nginx -d "$DOMAIN" -d "www.$DOMAIN" --non-interactive --agree-tos -m "$EMAIL"
sudo systemctl reload nginx
