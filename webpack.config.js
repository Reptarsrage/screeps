var webpack = require('webpack');
var path = require('path');

// variables
var sourcePath = path.join(__dirname, './src');
var outPath = path.join(__dirname, './dist');

module.exports = {
  context: sourcePath,
  devtool: 'inline-source-map',
  entry: {
    app: './main.ts'
  },
  output: {
    path: outPath,
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  node: {
    fs: 'empty'
  }
};
