/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const webpack = require('webpack');
const path = require('path');

module.exports = function override(config) {
  // Creating alias path
  const alias = config.resolve.alias || {};
  Object.assign(alias, {
    '@': path.resolve(__dirname, './src/'),
  });
  config.resolve.alias = alias;

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);
  return config;
};
