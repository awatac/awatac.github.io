/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#266ebc',
        secondary: '#545864',
        success: '#1d7a4f',
        danger: '#c42448',
        warning: '#ca3f1f',
        info: '#299ea9',
        light: '#dbdce1',
        dark: '#1a1a1a',
        background: '#f8f8f9',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}