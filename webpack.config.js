const webpack = require('webpack');
const { join } = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    app: join(__dirname, 'app', 'driver.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: join(__dirname, 'build'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'D3.js Trial',
      template: join(__dirname, 'base.html')
    })
  ]
}

module.exports = config;
