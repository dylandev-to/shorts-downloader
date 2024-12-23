/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        background: "#EEEEEE",
        primary: "#000000",
        secondary: "#444444",
        light: "#ffffff"
      },
    },
  },
  plugins: [],
}

