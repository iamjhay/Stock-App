/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "475px",
      },
      colors: {
        white: "white",
        none: "none",
      },
      borderWidth: {
        1: "1px",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0 , 1fr))",
        8: "repeat(8, minmax(0 , 1fr))",
        // 9: "repeat(8, minmax(0 , 1fr))",
        // 10: "repeat(10, minmax(0 , 1fr))",
        // 11: "repeat(11, minmax(0 , 1fr))",
      },
      transitionDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
      },
    },
  },
  plugins: [],
};
