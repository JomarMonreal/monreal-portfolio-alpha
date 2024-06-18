/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Moreganic', 'serif'],
      },
      keyframes: {
        float:{
          "0%": { translate: "0 0"},
          "50%": { translate: "0 -0.5rem"},
          "100%": { translate: "0 0"},
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

