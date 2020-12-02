const webpack = require('webpack');
const path = require('path');

/**@type {webpack.Configuration} */
const config = {
  optimization: {
    minimize: false,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
        exclude: '/node_modules/',
      },
      {
        test: /\.tsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/typescript',
              '@babel/preset-react',
            ],
          },
        },
        exclude: '/node_modules/',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    alias: {
      '@components': path.resolve(__dirname, 'src/client/components'),
      '@pages': path.resolve(__dirname, 'src/client/pages'),
      '@utils': path.resolve(__dirname, 'src/client/utils'),
      '@redux': path.resolve(__dirname, 'src/client/redux'),
      '@actions': path.resolve(__dirname, 'src/client/actions'),
    },
  },
};

module.exports = config;
