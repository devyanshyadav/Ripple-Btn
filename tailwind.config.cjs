/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        default: "#4f46e5",
        primary: "#db2777",
        secondary: "#c026d3",
      },
    },
  },
  plugins: [],
};
