/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        aboldbeauty: {
          "primary":          "#c9a84c",
          "primary-content":  "#0a0a0a",
          "secondary":        "#a07830",
          "secondary-content":"#fdf6e3",
          "accent":           "#1e1a10",
          "accent-content":   "#c9a84c",
          "neutral":          "#1a1a1a",
          "neutral-content":  "#c9a84c",
          "base-100":         "#0a0a0a",
          "base-200":         "#111111",
          "base-300":         "#1a1a1a",
          "base-content":     "#e8d5a3",
          "info":             "#c9a84c",
          "success":          "#4caf77",
          "warning":          "#e0a030",
          "error":            "#e05c5c",
        },
      },
    ],
    darkTheme: false,
  },
}
