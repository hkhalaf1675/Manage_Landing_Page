/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      
      screen:{
        sm:'576px',
        md:'768px',
        lg:'992px',
        xl:'1200px',
        xxl:'1400px'
      }
    },
  },
  plugins: [],
}