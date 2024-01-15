/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
      extend: {
        colors: {
          primary: "#050816",
          secondary: "#2d2c2b",
          tertiary: "#de4741",
          "black-100": "#100d25",
          "black-200": "#090325",
          "white-100": "#f3f3f3",
          "pastel-blue": "#3755b6",
          "pastel-green": "#3eebba",
          "emerald-300": "#6ee7b7",
          "cotton" : "#FBFBF9"
        },
        boxShadow: {
          card: "0px 35px 120px -15px #211e35",
        },
        screens: {
          xs: "450px",
        },
        backgroundImage: {
          "hero-pattern": "url('/src/assets/herobgricorie.png')",
        },
        objectPosition: {
          "aono-position" : "55%_40px",
          "acti-position" : "55%_40px",
        },
      },
    },
    plugins: [],
  };