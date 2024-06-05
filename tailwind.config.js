/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E83667",
        primaryDark: "#BB2C51",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cursive: ["Ephesis", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '10px',
          sm: '20px',
          lg: '30px',
          xl: '40px',
        },
      },
    },
  },
  plugins: [],
}
