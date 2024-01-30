/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
    },
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        'primary-black': "#0D0F0F",
        'light-black': "#0D0F0F",
        "primary-orange": "#EFAC6D",
        "red-orange": "#FF856A",
        "primary-gray": "#323639",
        "slate-gray": "#6B6B6B",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}