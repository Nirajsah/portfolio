/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  variants: {
    opacity: ["responsive", "focus", "active"],
  },
  plugins: [require("@tailwindcss/forms")],
};
