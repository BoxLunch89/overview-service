const path = require('path');
const Dotenv = require('dotenv-webpack');

const BUILD_DIR = path.resolve(__dirname, 'client/public');
const APP_DIR = path.resolve(__dirname, 'client/app');

const config = {
  entry: `${APP_DIR}/Overview (Main)/Overview.jsx`,
  module: {
    loaders: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader',
      }, {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]',
        },
      },
    ],
  },
  plugins: [
    new Dotenv(),
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
  },
};

module.exports = config;
