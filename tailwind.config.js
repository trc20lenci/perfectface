/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.js", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Core Perfect Face design tokens
        bg: "#0F0F0F",
        card: "#1C1C1E",
        cardAlt: "#232326",
        border: "#2C2C2E",
        textPrimary: "#FFFFFF",
        textSecondary: "#9A9AA0",
        neonPurple: "#8B5CF6",
        neonPurpleDark: "#6D28D9",
        acidGreen: "#39FF88",
        warnYellow: "#FFD54A",
        infoBlue: "#4CA6FF",
        dangerRed: "#FF5B5B",
      },
      borderRadius: {
        xl2: "28px",
      },
    },
  },
  plugins: [],
};
