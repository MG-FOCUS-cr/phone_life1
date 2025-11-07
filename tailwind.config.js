/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF8C42',
        secondary: '#000000',
        accent: '#333333',
        border: '#E5E5E5'
      }
    },
  },
  plugins: [],
  future: {
    hoverOnlyWhenSupported: true,
  }
}