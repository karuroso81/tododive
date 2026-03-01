/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22d3ee",
        secondary: "#0ea5e9",
        bg: "#020617",
        surface: "#020617",
        muted: "#94a3b8",
      },
    },
  },
  plugins: [],
};
