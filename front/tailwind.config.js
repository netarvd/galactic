/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#E1DB58',
        'secondary': '#339989',
        'accent': '#7DE2D1'
      }
    },
  },
  plugins: [],
}