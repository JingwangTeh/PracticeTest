"use strict";

/*** Modules ***/
const webpack = require('webpack');
const merge = require('webpack-merge');

/*** Plugins ***/
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//const CompressionPlugin = require("compression-webpack-plugin");

/*** Utilities ***/
const path = require('path');

/*** Files ***/
const common = require('./webpack.common.js');



module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[chunkhash].bundle.js",
	chunkFilename: "[name].[chunkhash].chunk.js",
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin({
      sourceMap: true,
	  uglifyOptions: {
		output: {
		  comments: false,
		}
	  }
    }),
    //new CompressionPlugin(),
  ]
});