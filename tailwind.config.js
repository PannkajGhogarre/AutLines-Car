/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        one:'orange',
        two:'#0693e3',
        three:'#22abc3'
      }
    },
  },
  plugins: [],
}