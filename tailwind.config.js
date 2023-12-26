/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        customLora: ['Lora', 'sans-serif'],
      },
      colors: {
        customBrown : '#8B4513',
        customBlue : '#00154C',
      },
      
    },
  },
  plugins: [],
}

