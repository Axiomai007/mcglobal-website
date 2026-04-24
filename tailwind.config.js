/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy': {
          50: '#f0f6fb',
          100: '#e1eef7',
          200: '#c3ddf0',
          300: '#a5cce8',
          400: '#6f99d0',
          500: '#003D7A',
          600: '#003470',
          700: '#002855',
          800: '#001d3a',
          900: '#00131f',
        },
        'sky': {
          500: '#005BA6',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
