"use strict";

/*** Modules ***/
const webpack = require('webpack');
const merge = require('webpack-merge');

/*** Plugins ***/
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

/*** Utilities ***/
const path = require('path');

/*** Files ***/
const common = require('./webpack.common.js');
const webpackConstants = require('./webpack._constants.js');



module.exports = merge(common, {
  mode: "development",
  output: {
    filename: "[name].bundle.js",
	  chunkFilename: "[name].chunk.js",
  },
  devtool: 'inline-source-map',
  // devServer used when run using webpack-dev-server --open
  devServer: {
    historyApiFallback: true,
    contentBase: webpackConstants.PATH_SRC,
	  hot: true,
  },
  plugins: [
	  new webpack.HotModuleReplacementPlugin(),
    // new BundleAnalyzerPlugin()
  ],
});