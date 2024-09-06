/** @type {import('tailwindcss').Config} */
const { nextui } = require( "@nextui-org/react" );

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },

    extend: {
      fontFamily: {
        medievalSharp: '"MedievalSharp",cursive',
        inter: '"Inter", sans-serif'
      },
      // animation >>>>>>>>>>>>>>>
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        radius: {
          '0%': {
            "--radius": '0px'
          },
          '100%': {
            "--radius": 'calc(var(--width)/2*1px)'
          },
        },
      },
      animation: {
        'gradient-text': 'gradient 3s ease infinite',
      },
      animation: {
        'radius': 'radius 3s 3s',
      },
      // animation <<<<<<<<<<<<<<

      backgroundColor: {
        page: '#111111'
      }
    },
  },
  darkMode: "class",
  plugins: [ nextui() ]
}