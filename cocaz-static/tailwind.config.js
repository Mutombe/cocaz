/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'Playwrite Deutschland Grundschrift', 'sans-serif'],
        serif: ['Cardo', 'serif'],
      },
    },
  },
  plugins: [],
}

