const flowbite = require("flowbite-react/tailwind");


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     flowbite.content(),
  ],
  theme: {
    extend: {
      backgroundImage: {
        "img1" : "url('https://img.freepik.com/free-vector/realistic-abstract-football-background_52683-67579.jpg?semt=ais_hybrid')",
        "img2" : "url('https://img.freepik.com/free-vector/realistic-abstract-football-background_52683-67579.jpg?semt=ais_hybrid')"
       },
    },
  },
  plugins: [
    flowbite.plugin(),
    require('tailwind-scrollbar'),
  ],
}