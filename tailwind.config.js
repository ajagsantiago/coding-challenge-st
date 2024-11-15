/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}" // Adjust if using different file extensions
  ],
  theme: {
    extend: {
      colors: {
        primary: "#003366",
        secondary: "#414E62",
        tertiary: "#414E62",
        'background-tertiary': "#F2F4F7",
        'richdale-cyan': "#32ADE6"
      }
    },
  },
  plugins: [],
}

