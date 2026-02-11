
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: '#0B0F1A',
        surface: '#121826',
        'surface-light': '#1A2035',
        primary: {
          DEFAULT: '#0033AD', // Cardano Blue
          electric: '#2A7BFF', // Electric Blue
          glow: '#3EA6FF',
        },
        secondary: {
          cyan: '#00E0FF',
          teal: '#1BE7A1', // Mint Teal
        },
        accent: {
          orange: '#FF8A3D', // Alert Orange
          red: '#FF4D6D', // Error Red
        },
        text: {
          primary: '#E6EAF2', // Off White
          secondary: '#8C96A7', // Muted
        },
        divider: 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '24px',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(42, 123, 255, 0.15)',
        'glow-lg': '0 0 30px rgba(42, 123, 255, 0.25)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in-soft': 'fade-in-soft 0.6s ease-out both',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-soft': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
