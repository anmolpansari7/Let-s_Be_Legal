module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "statue-of-justice": "url('/src/assets/home-bg.png')",
        "statue-of-justice-mobile": "url('/src/assets/home-bg-mobile.png')",
      },
      fontFamily: {
        mont: ['"Montserrat"', "sans-serif"],
      },
      colors: {
        "sky-theme": "#35598D",
        "footer-bg": "#090C1D",
      },
    },
  },
  plugins: [],
};
