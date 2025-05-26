/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-beige": "#FEF7EE",
        "custom-green": "#BEE3CC",
        "custom-yellow": "#F6C768",
        "custom-red": "#ED735D",
        "custom-gray": "#6F757C",
        "custom-dark": "#1B1D1F",
        "custom-black": "#111315",
      },
    },
  },
  plugins: [],
};
