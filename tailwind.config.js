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
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      'thin': '0.5px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
    extend: {
      fontFamily: {
        oxanium: ['Oxanium', 'sans-serif'],
      },
      colors: {
        'primary': "#171A1B",
        "primary-yellow": "#FFC83B",
        "secondary": "#1B1F20",
        "slate-gray": "#5E5C58",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}