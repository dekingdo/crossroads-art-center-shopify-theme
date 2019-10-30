const postcssImport = require('postcss-easy-import');
const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');
const cssNano = require('cssnano');
const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    'src/**/*.liquid'
  ],
  whitelistPatterns: [/tns|is-active/],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    postcssImport(),
    tailwindcss('src/styles/tailwind.config.js'),
    postcssPresetEnv({
      stage: 0
    }),
    ...process.env.NODE_ENV === 'production'
      ? [purgecss, cssNano]
      : [purgecss],
  ]
}