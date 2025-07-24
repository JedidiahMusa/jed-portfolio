/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8',         // light mode primary
        'primary-dark': '#60A5FA',  // dark mode primary
        secondary: '#9333EA',
        'secondary-dark': '#D8B4FE',
      },
    },
  },
  plugins: [],
}
