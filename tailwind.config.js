/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Using modern `hsl`
        "main-purple": "rgb(var(--main-purple) / <alpha-value>)",
        "main-purple-hover": "rgb(var(--main-purple-hover) / <alpha-value>)",
        black: "rgb(var(--black) / <alpha-value>)",
        "very-dark-grey-dark-bg": "rgb(var(--very-dark-grey-dark-bg) / <alpha-value>)",
        "dark-grey": "rgb(var(--dark-grey) / <alpha-value>)",
        "lines-dark": "rgb(var(--lines-dark) / <alpha-value>)",
        "medium-grey": "rgb(var(--medium-grey) / <alpha-value>)",
        "light-grey-light-bg": "rgb(var(--light-grey-light-bg) / <alpha-value>)",
        white: "rgb(var(--white) / <alpha-value>)",
        red: "rgb(var(--red) / <alpha-value>)",
        "red-hover": "rgb(var(--red-hover) / <alpha-value>)"
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".heading-xl": {
          "font-feature-settings": "'clig' off, 'liga' off",
          "font-family": "Plus Jakarta Sans",
          "font-size": "1.5rem",
          "font-style": "normal",
          "font-weight": "700",
          "line-height": "normal"
        },

        ".heading-l": {
          "font-feature-settings": "'clig' off, 'liga' off",
          "font-family": "Plus Jakarta Sans",
          "font-size": "1.125rem",
          "font-style": "normal",
          "font-weight": "700",
          "line-height": "normal"
        },

        ".heading-m": {
          "font-feature-settings": "'clig' off, 'liga' off",
          "font-family": "Plus Jakarta Sans",
          "font-size": "0.9375rem",
          "font-style": "normal",
          "font-weight": "700",
          "line-height": "normal"
        },
        ".heading-s": {
          "font-feature-settings": "'clig' off, 'liga' off",
          "font-family": "Plus Jakarta Sans",
          "font-size": "0.75rem",
          "font-style": "normal",
          "font-weight": "700",
          "line-height": "normal",
          "letter-spacing": "0.15rem"
        },

        ".body-l": {
          "font-feature-settings": "'clig' off, 'liga' off",
          "font-family": "Plus Jakarta Sans",
          "font-size": "0.8125rem",
          "font-style": "normal",
          "font-weight": "500",
          "line-height": "1.4375rem" /* 176.923% */
        },
        ".body-m": {
          "font-feature-settings": "'clig' off, 'liga' off",
          "font-family": "Plus Jakarta Sans",
          "font-size": "0.75rem",
          "font-style": "normal",
          "font-weight": "700",
          "line-height": "normal"
        }
      });
    }
  ]
};
