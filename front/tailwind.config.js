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
      'bg-green-300',
      'bg-lime-300',
      'bg-amber-300',
      'bg-orange-400',
      'bg-red-500',
      'border-green-300',
      'border-lime-300',
      'border-amber-300',
      'border-orange-400',
      'border-red-500',
    ],
  },
}
