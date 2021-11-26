module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        wrapper: "652px",
      },
      minHeight: {
        box: "150px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
