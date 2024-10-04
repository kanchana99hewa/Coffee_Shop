/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkAmber: '#4a2700', // Custom darker amber
      },
      fontFamily: {
        brush: ['"Alex Brush"', 'cursive'],
      },
    },
  },
  plugins: [],
}

