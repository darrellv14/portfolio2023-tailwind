/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#10b981',
        dark: '#0f172a',
        secondary: '#64748b',
        ITS: '#0E0071',
      },
      screens: {
        '2xl': '1320px',
      }
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}