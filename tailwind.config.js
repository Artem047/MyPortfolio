/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      lat: { max: "1200px" },
      tab: { max: "750px" },
      tel: { max: "420px" },
    },
  },
  plugins: [],
}