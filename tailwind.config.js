// tailwind.config.js
module.exports = {
  purge: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      colors: {
        snapyellow: "#fefc01",     
  
     }},
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }
