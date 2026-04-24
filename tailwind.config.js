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
          50: '#104088',
          100: '#104088',
          200: '#104088',
          300: '#104088',
          400: '#104088',
          500: '#104088',
          600: '#104088',
          700: '#104088',
          800: '#104088',
          900: '#104088',
        },
        'sky': {
          500: '#104088',
        }
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
