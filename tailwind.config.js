/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      cs: ["CS", "cursive"],
    },
    colors: {
      primary: "#122c34ff",
      secondary: "#224870ff",
      tertiary: "#2a4494ff",
      light: "#4ea5d9ff",
      superLight: "#44cfcbff",
      white: "#fff",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#122c34ff",
          secondary: "#224870ff",
          accent: "#2a4494ff",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
    ],
  },
};
