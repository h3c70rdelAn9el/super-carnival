module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'coral': '#e7717d',
        'plum': '#6f1d1b'
      },
      fontFamily: {
        'shadows': ['"Shadows Into Light Two"', 'cursive'],
        sans: ['Raleway', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
    ],
 },
}
