/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          beige: '#E8DDD0',
          cream: '#F5F1EB',
          clay: '#C9A687',
          brown: '#8B7355',
          olive: '#717554',
          charcoal: '#3A3A3A',
          stone: '#A89A8C',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};


