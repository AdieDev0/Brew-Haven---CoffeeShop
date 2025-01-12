/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "BarlowCondensed": ["Barlow Condensed"],
        "YanoneKaffeesatz": ["Yanone Kaffeesatz"],
        "Syncopate": ["Syncopate"],
      },
    },
  },
  plugins: [],
};
