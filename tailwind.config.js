/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<screens>/**/*.{js,jsx,ts,tsx}","./screens/**/*.{js,jsx,ts,tsx}", "./<navigation>/**/*.{js,jsx,ts,tsx}", "./navigation/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        redprimary: "#db393c",
        greenprimary:"db393c",
        backgroundprimary: "#E8E7E4",
        laranjaprimary: "#C73E28",
        blueprimary: "#3165b0",
        greenchat: "#1FAA70",

    },
  },
  },
  plugins: [],
}

