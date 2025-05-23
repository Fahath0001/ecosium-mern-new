/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.65rem',
        '17px': '17px',
      },
      colors: {
        primary: '#384ed8',
        secondary: '#64748b',
      },
    },
  },
  plugins: [],
}
