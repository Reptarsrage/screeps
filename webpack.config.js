const fs = require('fs');
const path = require('path');
const webpack = require('webpack');

// Plugins
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const ScreepsWebpackPlugin = require('./build/screepsWebpackPlugin');

// variables
const sourcePath = path.join(__dirname, './src');
const outPath = path.join(__dirname, './dist');

module.exports = (env) => {
  const isDevBuild = !(env && env.prod);

  const config = {
    devtool: 'source-map',
    entry: {
      main: sourcePath + '/main.ts'
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          enforce: 'pre',
          use: "source-map-loader",
        },
        {
          test: /\.ts$/,
          loader: "ts-loader",
          options: {
            // disable type checker - we will use it in fork plugin
            transpileOnly: true
          }
        },
      ]
    },
    output: {
      path: outPath,
      filename: 'main.js'
    },
    plugins: [
      new CleanWebpackPlugin([outPath]),
      new ForkTsCheckerWebpackPlugin()
    ],
    target: 'node',
    resolve: {
      extensions: [ '.ts', '.js' ]
    }
  };

  if (!isDevBuild) {
    config.plugins.push(new ScreepsWebpackPlugin());
  }

  return [config];
}
