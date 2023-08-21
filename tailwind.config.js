/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "dark-cyan": "var(--dark-cyan)",
        "very-dark-desaturated-blue": "var(--very-dark-desaturated-blue)",
        "dark-grayish-blue": "var(--dark-grayish-blue)",
        "dark-gray": "var(--dark-gray)",
      },
      fontFamily: {
        "kumbh-sans": "var(--kumbh-sans)",
      },
      boxShadow: {
        "get-css-scan-01": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        "get-css-scan-16":
          "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;",
      },
    },
  },
  plugins: [],
};
