/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── PALETA MUTUAL AMES ──────────────────────────────────
        // Primario:  Azul naval profundo
        primary: "#0D2054",
        // Secundario: Azul vibrante (acción, links)
        secondary: "#1A56DB",
        // Terciario:  Violeta intenso
        accent: "#7C3AED",
        // Fondo:      Casi blanco azulado
        background: "#F4F7FF",
        // Extra: negro para contrastes fuertes
        dark: "#080E1E",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
