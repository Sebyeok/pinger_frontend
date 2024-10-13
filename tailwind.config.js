/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      navy: { 100: "#0E2848", 200: "#142133" },
      black: "#0F161D",
      white: {
        DEFAULT: "#FFFFFF",
        "opacity-30": "#FFFFFF4D",
        "opacity-80": "#FFFFFFCC",
      },
      gray: {
        100: "#F6F7FB",
        200: "#E3E8EE",
        300: "#CDD1DA",
        400: "#9BA4B3",
        500: "#616F7C",
        600: "#3E4C59",
      },
      ktas1: "#3F73C8",
      ktas2: "#EF6F3A",
      ktas3: "#F9DD71",
      ktas4: "#68CAAB",
      ktas5: "#CCCCCC",
    },
    extend: {
      boxShadow: {
        bottomTabButton: "0px 6px 20px 0px rgba(0,0,0,0.35)",
        individualCard: "0px 2px 10px 0px rgba(0,0,0,0.30)",
        pingerCheckButton: "0px 0px 34px 0px rgba(63, 115, 200, 0.50)",
        mainModalButton: "0px 4px 64px 0px rgba(0, 0, 0, 0.20)",
        mainModalCloseButton: "0px 3px 18px rgba(97, 111, 124, 1)",
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
    },
  },
  plugins: [require("./src/themes/tailwindCustomPlugin")],
};
