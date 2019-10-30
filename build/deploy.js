const themeKit = require('@shopify/themekit');

themeKit.command('deploy', {
  env: process.env.NODE_ENV
});