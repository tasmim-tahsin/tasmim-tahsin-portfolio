/** @type {import('tailwindcss').Config} */

module.exports ={
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ['var(--poppins)'],
        inter: ['var(--inter)'],
      },
    },
  },
  plugins: [require('daisyui'),],
};
