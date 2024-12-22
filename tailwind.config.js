/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      "headings":["Poppins", "serif"],
      "body":["Open Sans", "serif"]
    },
    extend: {
      colors: {

        // ### Primary
        "Pink": "hsl(322, 100%, 66%)",

        // ### Neutral
        "VeryPaleCyan": "hsl(193, 100%, 96%)",
        "VeryDarkCyan": "hsl(192, 100%, 9%)",
        "GrayishBlue": "hsl(208, 11%, 55%)"
      },
      backgroundImage:{
        "bgMobile":"url('./assets/images/backgrounds/bg-hero-mobile.svg')",
        "bgDesktop":"url('./assets/images/backgrounds/bg-hero-desktop.svg')"
      }

    },
  },
  plugins: [],
}