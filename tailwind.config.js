/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutralSilver": '#F5F7FA',
        "neutralGray": '#4D4D4D',
        "neutralGrayLight": '#4CAF4F',
        "neutralGrayDark": '#717171',
    },
  },
  plugins: [],
}
}