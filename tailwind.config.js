/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A2B7C", // Azul Oscuro Profundo (fondo video)
        secondary: "#682079", // Morado/Púrpura (texto encabezados, botón)
        accent: "#0047BA", // Azul Vibrante (texto secundario, hovers)
        background: "#F7F9FA",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
