/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  plugins: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
      colors: {
        darkblue: '#242A41',
        dark: '#1D2131',
      },

      fontFamily: {
        inter: '"Inter", sans-serif',
        manrope: '"Manrope", sans-serif'
      },

      backgroundColor: {
        page: '#111111'
      },

      backgroundSize: {
        '200': '200% 200%',
        '400': '400% 400%',
      },

      backgroundImage: {
        "gradient-text": "linear-gradient(90deg,gray 20%,#eee 40%,#eee 60%,gray 80%)",
        "gradient-purple-text": "linear-gradient(100deg,purple,cyan)",
      },

      keyframes: {
        "gradient-text": {
          '0%': {
            'background-size': '200% auto',
            'background-position': '0% center',
          },
          '100%': {
            'background-size': '200% auto',
            'background-position': '200% center',
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
        'gradient-text': 'gradient-text 10s linear infinite reverse',
        'radius': 'radius 3s 3s',
      },

    },
  },
  
}