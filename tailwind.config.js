/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      midnight: "#232324",
      red: "#e64833",
      hoverRed: "#e33922",
      brown: "#874f41",
      gray: "#F8F8F8",
      beige: "#E7D4B5",
      black: "#000000",
      grayHover: "#e6e6e6"
    },
    backgroundImage: {
      'midnight-bg': "url('/src/images/background.jpg')",
    },
    extend: {},
  },
  
  plugins: [],
};
