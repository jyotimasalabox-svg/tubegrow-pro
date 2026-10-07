/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        youtube: {
          red: '#FF0000',
          dark: '#0f0f0f',
          lightDark: '#1f1f1f',
          card: '#18181b',
          border: '#27272a'
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 15px rgba(239, 68, 68, 0.3)' },
          '100%': { boxShadow: '0 0 25px rgba(239, 68, 68, 0.7)' }
        }
      }
    },
  },
  plugins: [],
}
