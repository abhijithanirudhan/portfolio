/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        deck: {
          wall: '#041316', surface: '#08252b', card: '#0a323b', cardHover: '#0e414c',
          border: 'rgba(56, 217, 169, 0.22)', mint: '#38d9a9', teal: '#20c997',
          cyan: '#12b886', amber: '#f59e0b', rose: '#f43f5e'
        }
      },
      fontFamily: {
        sans: ['Arial', 'sans-serif'], heading: ['Arial Narrow', 'Arial', 'sans-serif'], deck: ['Arial Narrow', 'Arial', 'sans-serif']
      },
      boxShadow: {
        'deck-card': '0 20px 40px -15px rgba(1, 10, 12, 0.7), 0 0 20px rgba(56, 217, 169, 0.08)',
        'deck-hover': '0 30px 60px -12px rgba(1, 10, 12, 0.9), 0 0 35px rgba(56, 217, 169, 0.22)'
      }
    }
  }
};
