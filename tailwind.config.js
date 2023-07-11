/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
      'roboto': ['Roboto'],
      'alegreya': ['Alegreya']
    },
    colors:{
      gris: {
        1: '#424242',
        2: '#707070',
        3: '#A4A4A4',
        4: '#D3D3D3',
      },
      azul: {
        1: '#183494',
        2: '#3951A2',
        3: '#8B99C9',
        4: '#C5CCE4'
      }
    }
  },
    
    
  },
  plugins: [],
}

