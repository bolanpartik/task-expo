/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        customBlack:'#0F0F0F',
        customGray:'#333A45',
        customDarkGray:'#22272e',
        hoverShade:'#2f363f'
      },
      borderColor:{
        customGray:'#2D2D2D'
      },
      textColor:{
        customCyan:'#00FFFF'
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

