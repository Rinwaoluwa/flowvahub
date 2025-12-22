/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'impact': ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
                'manrope': ['Manrope', 'sans-serif'],
            },
            colors: {
                'brand-purple': '#9013FE',
                'brand-pink': '#FF8687',
                'brand-purple-light': '#b362fa',
                'brand-purple-border': 'rgba(144, 19, 254, 0.1)',
                'mint-green': '#D1FAE5',
                'soft-pink': '#FEE2E2',
                'soft-lavender': '#F3E8FF',
            },
            backgroundImage: {
                'gradient-brand': 'linear-gradient(90deg, #9013FE 0%, #FF8687 100%)',
                'gradient-hero': 'radial-gradient(ellipse at top left, rgba(144, 19, 254, 0.1) 0%, transparent 50%), radial-gradient(ellipse at top right, rgba(255, 134, 135, 0.1) 0%, transparent 50%)',
            },
            boxShadow: {
                'soft': '0px 2px 4px 0px rgba(0,0,0,0.1), 0px 6px 6px 0px rgba(0,0,0,0.08)',
                'soft-lg': '0px 4px 8px 0px rgba(0,0,0,0.1), 0px 12px 20px 0px rgba(0,0,0,0.1)',
                'button': '0px 8px 24px -6px rgba(0,0,0,0.25)',
                'purple': '0px 8px 32px -6px rgba(144, 19, 254, 0.4)',
            },
            borderRadius: {
                'pill': '100px',
                '4xl': '2rem',
            },
            animation: {
                'float': 'float 3s ease-in-out infinite',
                'float-delayed': 'float 3s ease-in-out 0.5s infinite',
                'float-delayed-2': 'float 3s ease-in-out 1s infinite',
                'pulse-slow': 'pulse 3s ease-in-out infinite',
                'marquee': 'marquee 25s linear infinite',
                'marquee-reverse': 'marquee-reverse 25s linear infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-33.333333%)' },
                },
                'marquee-reverse': {
                    '0%': { transform: 'translateX(-33.333333%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
            },
        },
    },
    plugins: [],
}
