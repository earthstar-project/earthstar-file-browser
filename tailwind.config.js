module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      flat:    '2px 6px 0px  -1px rgba(0, 0, 0, 0.15)',
      sm:      '0 1px   2px     0 rgba(0, 0, 0, 0.25)',
      DEFAULT: '0 3px   3px     0 rgba(0, 0, 0, 0.25), 0 1px 2px 0 rgba(0, 0, 0, 0.16)',
      md:      '0 6px   4px  -1px rgba(0, 0, 0, 0.25), 0 2px 4px -1px rgba(0, 0, 0, 0.16)',
      lg:      '0 10px 15px  -3px rgba(0, 0, 0, 0.25), 0 4px 6px -2px rgba(0, 0, 0, 0.15)',
      xl:      '0 20px 25px  -5px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.14)',
      '2xl':   '0 25px 50px -12px rgba(0, 0, 0, 0.6),  0 10px 10px -5px rgba(0, 0, 0, 0.14)',
      '3xl':   '0 35px 60px -15px rgba(0, 0, 0, 0.7),  0 10px 10px -5px rgba(0, 0, 0, 0.14)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
