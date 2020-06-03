const tailwindAspectRatioPlugin = require('tailwindcss-aspect-ratio');

module.exports = {
  purge: ['./components/**/*.jsx', './pages/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        wildWatermelon: '#FF6579',
        flesh: '#FFCCA5',
        serenade: '#FFF7EB',
        blueZodiac: '#0F1B49',
        deepKoamaru: '#172979',
        riptide: '#92EADE',
        whiteIce: '#CFF7EB',
        chelseaCucumber: '#70AF62',
        feijoa: '#90D483',
        gray: '#7F7E7E',
      },
      fontFamily: {
        body: ['Montserrat', 'sans-serif'],
        krub: ['Krub', 'sans-serif'],
      },
      fontSize: {
        micro: '0.625rem',
        '6': '1.5rem',
        '7': '1.75rem',
        '8': '2rem',
        '15': '3.75rem',
        '7xl': '5rem',
        '8xl': '6rem',
      },
      width: {
        '28': '7rem',
        '72': '18rem',
      },
      height: {
        '28': '7rem',
        px2: '2px',
      },
      maxWidth: {
        '20': '5rem',
      },
      inset: {
        full: '100%',
        '2': '0.5rem',
      },
      spacing: {
        '0.75': '0.1875rem',
        '9': '2.25rem',
      },
      borderRadius: {
        large: '1rem',
      },
      boxShadow: {
        default: '0px 2px 8px rgba(23, 41, 121, 0.24)',
      },
      opacity: {
        '80': '.8',
        '85': '.85',
        '90': '.90',
        '95': '.95',
      },
      fill: (theme) => ({
        white: theme('colors.white'),
        chelseaCucumber: theme('colors.chelseaCucumber'),
      }),
    },
    aspectRatio: {
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9],
    },
  },
  variants: {
    borderWidth: ['responsive', 'last', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
  },
  plugins: [tailwindAspectRatioPlugin],
};
