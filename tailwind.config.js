/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#184bfc",
        secondary: "#dfdfdf",
        success: "#8ac186",
      },
    },
  },
  plugins: [],
};
