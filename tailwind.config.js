/** @type {import('tailwindcss').Config} */
export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          50: '#f3f5f6',
          100: '#dce1e5',
          200: '#b9c1c9',
          300: '#8d99a5',
          400: '#66727d',
          500: '#4d5861',
          600: '#394147',
          700: '#2a3035',
          800: '#1d2226',
          900: '#121619',
          950: '#0a0d10',
        },
        amber: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#d97706',
          600: '#b45309',
          700: '#92400e',
          800: '#78350f',
          900: '#451a03',
        },
      },
      fontFamily: {
        heading: ['var(--font-barlow-condensed)', 'sans-serif'],
        sans: ['var(--font-ibm-plex-sans)', 'sans-serif'],
      },
      boxShadow: {
        industrial: '0 24px 70px -34px rgba(0, 0, 0, 0.72)',
      },
      keyframes: {
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
        'float-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'pulse-down': {
          '0%, 100%': { opacity: '1', transform: 'translateY(0)' },
          '50%': { opacity: '0.5', transform: 'translateY(6px)' },
        },
        'reveal-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(217, 119, 6, 0.35)' },
          '50%': { boxShadow: '0 0 32px rgba(217, 119, 6, 0.6)' },
        },
      },
      animation: {
        'ken-burns': 'ken-burns 20s ease-out forwards',
        'float-in-down': 'float-in-down 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'pulse-down': 'pulse-down 2s ease-in-out infinite',
        'reveal-up': 'reveal-up 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'glow-pulse': 'glow-pulse 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};