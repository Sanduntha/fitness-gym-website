/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlack: '#000000',
        brandGray: '#333333',
        brandGold: '#C69911',
        brandLight: '#F2F2F2',
      }
    },
  },
  plugins: [],
}