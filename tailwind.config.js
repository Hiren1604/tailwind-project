/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],  // Corrected to 'index.html'
  theme: {
    extend: {
      colors: {
        'primary': '#3238f2'
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],  
        'body': ['Inter', 'sans-serif']
      },
      boxShadow: {
        'custom': '0px 2px 10px rgba(0,0,0,0.1)'
      }
    },
  },
  plugins: [],
}

