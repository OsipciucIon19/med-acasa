/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter Variable"', 'Inter', 'system-ui', 'sans-serif'],
            },
            animation: {
                'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
                'fade-in': 'fadeIn 0.6s ease both',
                'scale-in': 'scaleIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
                'slide-in-left': 'slideInLeft 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
                'slide-in-right': 'slideInRight 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
                'float-soft': 'floatSoft 6s ease-in-out infinite',
                'float-slow': 'floatSoft 9s ease-in-out infinite',
                'shimmer': 'shimmer 3s linear infinite',
                'pulse-ring': 'pulseRing 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'gradient-shift': 'gradientShift 12s ease infinite',
                'wobble': 'wobble 1.6s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.94)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(40px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                floatSoft: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-12px)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' },
                },
                pulseRing: {
                    '0%': { transform: 'scale(0.85)', opacity: '0.55' },
                    '80%, 100%': { transform: 'scale(1.85)', opacity: '0' },
                },
                gradientShift: {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                wobble: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
            },
            boxShadow: {
                'glow-teal': '0 12px 32px -8px rgba(13, 148, 136, 0.45)',
                'glow-blue': '0 12px 32px -8px rgba(37, 99, 235, 0.40)',
                'soft': '0 4px 16px -4px rgba(15, 23, 42, 0.08)',
            },
            backgroundSize: {
                'shimmer': '200% 100%',
                'gradient-x': '200% 200%',
            },
        },
    },
    plugins: [],
};
