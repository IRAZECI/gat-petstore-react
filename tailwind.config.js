/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Adicionando as cores que estavam faltando
      colors: {
        'gat-dark': '#1E1E1E',
        'gat-dark-light': '#2C2C3A',
        'gat-gray': '#5E5E6A',
        'gat-text-light': '#EFEFEF',
        'gat-notification': '#CC4B64',
        'gat-bege': '#F5F5DC', 
        'gat-bege-light': '#FFF8E7',
        'gat-blue-green': '#4DA1B1',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        logo: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}

