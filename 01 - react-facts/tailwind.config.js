/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "icon-dark": "url(images/react-icon-dark.png)",
        "icon-white": "url(images/react-icon-light.png)",
      },
      backgroundPosition: {
        "right-center": "right center",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
