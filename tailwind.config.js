
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        'gym-dark': '#1a1a1a',
        'gym-card': '#2a2a2a',
        'gym-border': '#3a3a3a',
        'gym-gold': '#d4a017',
      }
    },
  },
  plugins: [],
}
