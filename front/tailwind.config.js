/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF5604',
        secondary: '#339989',
        accent: '#7DE2D1',
      },
    },
  },
  plugins: [],
  purge: {
    safelist: [
      'from-green-300',
      'from-lime-300',
      'from-amber-300',
      'from-orange-400',
      'from-red-500',
    ],
  },
}
