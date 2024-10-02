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
        "bg-form1": "url('/public/bg-form1.jpg')",
      },
      colors: {
        primary: "#6E54B5",
        second: "rgb(158, 158, 167)",
        authBackround: "#2B2738",
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
