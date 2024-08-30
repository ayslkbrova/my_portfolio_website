/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', 
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes: {
        'fade-in-slide-up': {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      borderColor: {
        'white-transparent': 'rgba(255, 255, 255, 0.4)',
      }, colors: {
        'custom-red': '#DE4C36',
        'customGray': '#161616',
      }, boxShadow: {
        'custom': '0px 4px 22.1px 0px rgba(255, 250, 250, 0.25)',
      },
      animation: {
        'fade-in-slide-up': 'fade-in-slide-up 0.5s ease-out',
      },
      height: {
        '50vh': '50vh',
      },
      transitionDuration: {
        '400': '400ms',
      },
      transitionProperty: {
        'transform': 'transform',
      },
      transform: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
}

