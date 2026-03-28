/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signature: ['CalifornianSignature', 'cursive'],
        talina: ['Talina', 'sans-serif'],
    },
  },
   },
  plugins: [],
}