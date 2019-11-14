const merge = require('webpack-merge');
const common = require('./webpack.common');
const NodemonPlugin = require('nodemon-webpack-plugin');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.dev.json',
        },
      },
    ],
  },
  plugins: [new NodemonPlugin()],
  watch: true,
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
