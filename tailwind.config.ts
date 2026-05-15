import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: 'class',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cream: {
                    50: '#FDFCFB',
                    100: '#F9F9F9',
                    200: '#F5F4F2',
                    300: '#EEEEE8',
                    400: '#E5E4DD',
                },
                warmGray: {
                    100: '#F7F6F4',
                    200: '#E8E7E3',
                    300: '#D4D3CE',
                    400: '#B8B7B2',
                    500: '#9C9B96',
                    600: '#7A7975',
                    700: '#5C5B58',
                    800: '#3E3D3B',
                },
                wood: {
                    light: '#E8DCC8',
                    natural: '#D4C4A8',
                    medium: '#B8A588',
                },
            },
            fontFamily: {
                serif: ['var(--font-serif)', 'Cormorant Garamond', 'serif'],
                sans: ['var(--font-sans)', 'Montserrat', 'sans-serif'],
            },
            spacing: {
                '18': '4.5rem',
                '22': '5.5rem',
                '26': '6.5rem',
                '30': '7.5rem',
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            boxShadow: {
                'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
                'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 20px 25px -5px rgba(0, 0, 0, 0.04)',
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                scaleIn: {
                    '0%': { transform: 'scale(0.95)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
            },
        },
    },
    plugins: [],
};

export default config;
