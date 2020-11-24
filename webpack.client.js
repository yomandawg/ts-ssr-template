const webpack = require('webpack');
const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

/**@return {webpack.Configuration} */
const config = () => {
  console.log(
    `[CONFIG:CLIENT] bundling configuration for ${process.env.NODE_ENV}`
  );

  return {
    entry: 'client/index.tsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'public'),
    },
  };
};

module.exports = merge(baseConfig, config());
