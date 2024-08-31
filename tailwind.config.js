/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      boxShadow: {
        'customShadow': '5px 5px 11px #bebebe, -5px -5px 11px #ffffff',
        'customShadow1' : '6px 6px 10px #949494, -6px -6px 10px #ffffff',
        'customDarkShadow': '10px 10px 8px 0px rgba(0, 0, 0, 0.64)',
        'customDarkShadow1': '5px 5px 8px 0px rgba(0, 0, 0, 0.64)',
      },
      colors:{
        'custombgBlack': '#292729',
        'customBoxColor': '#45423c',
      }
    },
  },
  plugins: [],
}

