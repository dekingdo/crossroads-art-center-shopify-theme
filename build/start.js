'use strict';

const webpack = require('webpack');
const config = require('./webpack.config');

const clientCompiler = webpack(config);

clientCompiler.watch(
  {
    noInfo: false,
    quiet: false,
  },
  (err, stats) => {
    if (err) return;
  }
);

const themeKit = require('@shopify/themekit');
 
themeKit.command('watch', {
  env: 'development',
  notify: 'theme_ready'
});