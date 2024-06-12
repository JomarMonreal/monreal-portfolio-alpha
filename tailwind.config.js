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
          "0%": { transform: "translateY(0rem)"},
          "50%": { transform: "translateY(-0.5rem)"},
          "100%": { transform: "translateY(0rem)"},
        }
      },
      animation: {
        float: "float 5s ease-in-out infinite"
      }
    },
  },
  plugins: [],
}

