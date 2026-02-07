/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./app/components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#232D26",
        bgSecondary: "#6B746B",
        bgLight: "#CCD4C9",
        accentPrimary: "#576E45",
        accentSecondary: "#899C8F",
        accentHighlight: "#AAC64B",
      },
    },
  },
  plugins: [],
};
