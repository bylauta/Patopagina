/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        // Handle 3D model files
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            type: 'asset/resource',
        });
        return config;
    },
    images: {
        formats: ['image/avif', 'image/webp'],
    },
};

module.exports = nextConfig;
