/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      screens: {
        xs: "370px",
        xslg: "470px", // Custom breakpoint below the 'sm' breakpoint (default: 640px)
        xllg: "1350px",
        ucxl: "1920px",
      },
    },
  },
  plugins: [
    require("daisyui"),
    require("tailwind-scrollbar-hide"),
  ],
};
