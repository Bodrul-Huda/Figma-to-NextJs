/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        hero: "#D7F5DC",
        button1: "#20B15A",
        featureBg: "#F0FDF4",
        subButton: "#F55F1D",
        subNote: "#8B8B8B",
        teamBg: "#F8F9FC",
      },
    },
  },
  plugins: [],
};
