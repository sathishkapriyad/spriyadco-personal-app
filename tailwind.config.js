/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#afff0f',
        'dark': {
          DEFAULT: '#0f0f11',
          '50': '#1a1a1c',
          '100': '#222224',
          '200': '#27272a',
        },
        'light': {
          DEFAULT: '#ffffff',
          '50': '#f9fafb',
          '100': '#f3f4f6',
          '200': '#e5e7eb',
        },
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
        'display': ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      animation: {
        'gradient-x': 'gradient-x 3s ease infinite',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      boxShadow: {
        'glow': '0 0 15px 2px rgba(175, 255, 15, 0.3)',
        'glow-lg': '0 0 25px 5px rgba(175, 255, 15, 0.4)',
        'neo': '5px 5px 10px #0a0a0c, -5px -5px 10px #1e1e20',
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [],
} 