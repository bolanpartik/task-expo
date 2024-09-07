/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        customBlack:'#0F0F0F'
      },
      borderColor:{
        customGray:'#2D2D2D'
      },
      textColor:{
        customCyan:'#00FFFF'
      },
    },
  },
  plugins: [],
}

