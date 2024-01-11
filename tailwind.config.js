/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif']
      },
      backgroundImage: {
        'hero-pattern':
          'url("https://adminlte.io/wp-content/uploads/2021/04/hero-bg.jpg")'
      }
    },
    colors: {
      'primary-text-color': '#1f3e64',
      blue: '#005fd5',
      white: '#fff',
      black: '#000'
    },
    screens: {
      xs: '576px',
      // => @media (min-width: 576px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
      '3xl': '1650px'
      // => @media (min-width: 1650px) { ... }
    }
  },
  plugins: []
}
