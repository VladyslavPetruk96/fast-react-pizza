/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Roboto Mono, monospace',
    },
    extend: {
      height: {
        screen: '100dvh',
      },
    },
  },
  plugins: [],
};

// @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Lato:wght@400;700&family=Montserrat:wght@300;400;700&family=Roboto:wght@400;500;700;900&display=swap');
