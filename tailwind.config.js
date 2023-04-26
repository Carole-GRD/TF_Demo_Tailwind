/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary : {
          900 : '#021f27',
          500 : '#048ba8',
          100 : '#ecfafe',
        },
        secondary : {
          900 : '#660030',
          500 : '#ff99c8',
          100 : '#ffebf4',
        }
      }
    },
  },
  plugins: [],
}

