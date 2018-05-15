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
        test: /\.[jt]sx?/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  node: {
    fs: 'empty'
  }
};
