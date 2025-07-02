/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#2c3b42',
      },
      aspectRatio: {
        '8/5': '8 / 5',
        '2/1': '2 / 1',
      },
    },
  },
  plugins: [],
}