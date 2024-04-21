/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      sans: ["OpenSans", "Arial", "sans-serif"]
    },
    extend: {}
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "business",
    themes: [
      // "black"
      // "dark"
      // "forest"
      // "synthwave"
      // "halloween"
      // "dracula"
      // "night"
      // "coffee"
      // "dim"
      // "sunset"
      // "business"
      // -------
      // "light"
      // "cupcake"
      // "bumblebee"
      // "emerald"
      // "corporate"
      // "retro"
      // "cyberpunk"
      // "valentine"
      // "garden"
      // "aqua"
      // "lofi"
      // "pastel"
      // "fantasy"
      // "wireframe"
      // "luxury"
      // "cmyk"
      // "autumn"
      // "acid"
      // "lemonade"
      // "winter"
      "nord"
    ]
  }
}
