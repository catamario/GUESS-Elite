/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  theme: {
    extend: {      fontFamily: {
      italianno: ['Italianno', 'cursive'], // Adaugă fontul Italianno
    },},
    dropShadow: {
      '3xl': '0 0 15px rgba(0, 0, 0, 0.5)',
    },
    screens: {
      'custom': '920px',
    },

  },
  plugins: [],
}