/** @type {import('tailwindcss').Config} */
module.exports = {
  content:["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'fondoClaro':'#FCFCF7',
        'azul':'#1347CD',
        'azulT':'rgba(19, 71, 205, 0.6)',
        'amarillo':'#F6C71E',
        'naranja':'#FF901F',
        'naranjaT':'rgba(255,144,31,0.6)',
        'blanco':'#ffffff',
        gris:{
          'oscuro':'#4C4C4',
          'normal':'#B2ACAC',
        }
      },
      dropShadow: {
        '2xlB': '0 20px 20px rgba(255, 255, 255, 0.25)',
        '4xl': [
            '0 35px 35px rgba(0, 0, 0, 0.25)',
            '0 45px 65px rgba(0, 0, 0, 0.15)'
        ]
      }
    },
  },
  plugins: [],
}

