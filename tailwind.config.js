// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Make sure this covers your file types
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], // ✅ Your custom font
      },
    },
  },
  plugins: [],
}
