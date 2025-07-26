/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'mystical-purple': '#4C1D95',
        'deep-purple': '#2D1B69',
        'dark-green': '#1F2937',
        'mystical-gold': '#F59E0B',
        'dark-bg': '#0F0F23',
        'purple-glow': '#8B5CF6',
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'mystical': ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'mystical-gradient': 'linear-gradient(135deg, #1F2937 0%, #4C1D95 50%, #2D1B69 100%)',
        'gold-gradient': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 1s ease-out',
      },
      backdropBlur: {
        'xs': '2px',
      }
    },
  },
  plugins: [],
};