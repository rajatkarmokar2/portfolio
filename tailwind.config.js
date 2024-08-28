/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        medievalSharp: '"MedievalSharp",cursive'
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
      },
      animation: {
        'gradient-text': 'gradient 3s ease infinite',
      },
      // animation <<<<<<<<<<<<<<

      backgroundColor: {
        page: '#111111'
      }
    },
  },
  plugins: [],
}