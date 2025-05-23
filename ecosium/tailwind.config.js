/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: '#38b6ff',
        secondary: '#8fd6ff',
        bgwhite:'#ffffffdb'
      },
      screens: {
        xxs: '235px',              // 235 - 375
        xs: '376px',               // 376 - 480
        sm: '481px',               // 481 - 576
        md: '577px',               // 577 - 768
        lg: '769px',               // 769 - 992
        xl: '993px',               // 993 - 1400
        xxl: '1201px',             // 1201 - 1400
        xxxl: '1401px',            // 1401 - 1600
        '4xl': '1601px',           // anything above
      },
      clipPath: {
        'ellipse-custom': 'ellipse(48% 36% at 50% 50%)',
      },
    },
  },
  plugins: [
    
  ],
}
