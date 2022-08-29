/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "400px",
      tab: "500px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    // gridTemplateRows: {
    //   8: "repeat(8, minmax(0, 1fr))",
    //   layout: "200px minmax(900px, 1fr) 100px",
    //   16: "repeat(16, minmax(0, 1fr))",
    //   footer: "200px minmax(900px, 1fr) 100px",
    // },
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
};
