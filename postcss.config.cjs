const config = {
  plugins: [
    require('@tailwindcss/postcss'),
    require('postcss-import'),
    require('postcss-nesting'),
    require('autoprefixer'),
    require('cssnano'),
  ],
}

module.exports = config