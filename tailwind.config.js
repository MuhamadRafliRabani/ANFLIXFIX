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
        primary_color: "rgba(18,17,18,255)",
        second_color: "rgba(37,36,37,255)",
        text_color: "#6b7280",
        button_color: "#2E2E2E",
        card_overlay: "rgba(0, 0, 0, 0.7)",
      },
      container: {
        center: true,
      },
      screens: {
        xs: "475px",
        sm: "640px",
        base: "768px",
        md: "1024px",
        lg: "1280px",
        xl: "1440px",
        "2xl": "1536px",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      fontSize: {
        xs: "0.65rem",
        sm: ".78rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.150rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
