/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gov: {
          blue: '#1351B4',
          dark: '#0c326f',
          action: '#0047b1',
          light: '#f8f8f8',
          text: '#333333',
          heading: '#0c326f',
          green: '#168821',
          yellow: '#FFCD07',
          red: '#E60000',
        }
      },
      fontFamily: {
        sans: ['Rawline', 'Inter', 'Open Sans', 'sans-serif'],
      },
      boxShadow: {
        'gov-sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'gov-md': '0 4px 6px -1px rgb(0 0 0 / 0.05), 0 2px 4px -2px rgb(0 0 0 / 0.05)',
      },
      borderRadius: {
        'gov': '4px',
      }
    },
  },
  plugins: [],
}
