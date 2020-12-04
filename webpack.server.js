const webpack = require('webpack');
const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

/**@return {webpack.Configuration} */
const config = () => {
  console.log(
    `[CONFIG:SERVER] bundling configuration for ${process.env.NODE_ENV}`
  );

  return {
    mode: 'development',
    target: 'node',
    entry: './src/index.ts',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build'),
      libraryTarget: 'commonjs2', // for webpack-hot-server-middleware
    },
    externals: [webpackNodeExternals()],
  };
};

module.exports = merge(baseConfig, config());
