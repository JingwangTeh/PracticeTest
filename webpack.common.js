"use strict";

/*** Modules ***/
const webpack = require('webpack');

/*** Plugins ***/
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
//const CompressionPlugin = require("compression-webpack-plugin");

/*** Utilities ***/
const path = require('path');
const glob = require('glob');

/*** Files ***/
const webpackConstants = require('./webpack._constants.js');
const webpackFunctions = require('./webpack._functions.js');



/*** Plugin Options ***/

/* CleanWebpackPlugin */
// the path(s) that should be cleaned
const pathsToClean = [
  'dist',
  //'build'
];
// the clean options to use
const cleanOptions = {
  root:     webpackConstants.PATH_PUBLIC,
//  exclude:  ['shared.js'],
  verbose:  true,
  dry:      false
};

/* ExtractTextPlugin */
// instances
const extractCSS = new ExtractTextPlugin('stylesheets/[name]_CSS.css');
const extractSCSS = new ExtractTextPlugin('stylesheets/[name]_SCSS.css');

/*** END of Plugin Options ***/



module.exports = {
  //entry: webpackFunctions.toObject(glob.sync(webpackConstants.PATH_JS_ALL)),
  entry: {
	index: webpackConstants.PATH_REACTJS_INDEX,
	//index: webpackConstants.PATH_REACTJS_INDEX_TEST,
  },
  output: {
	path: webpackConstants.PATH_DIST,
	// publicPath used when run using custom server (node server.js)
	publicPath: '/',
  },
  optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /node_modules/,
					name: 'vendors',
					chunks: 'all',
					reuseExistingChunk: true,
					enforce: true,
					priority: 1,
				},
				lodash: {
					test: /lodash/,
					name: 'lodash',
					chunks: 'all',
					enforce: true,
					priority: 10,
				},
				reactDom: {
					test: /(react-dom)/,
					name: 'reactDom',
					chunks: 'all',
					priority: 10,
				},
				reactRouter: {
					test: /(react-router|react-router-dom)/,
					name: 'reactRouter',
					chunks: 'all',
					priority: 10,
				},
				reactRedux: {
					test: /(redux|react-redux|react-router-redux)/,
					name: 'reactRedux',
					chunks: 'all',
					priority: 10,
				}
			}
		}
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean, cleanOptions),
    new HtmlWebpackPlugin({
      template: webpackConstants.PATH_HTML_TEMPLATE,
      filename: webpackConstants.HTML_OUTPUT_NAME,
      inject: 'body'
    }),
    extractCSS,
    extractSCSS,
    new webpack.HashedModuleIdsPlugin(),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast 
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true
    }),
    //new CompressionPlugin()
  ],
  module: {
    rules: [
	    // js, jsx
      {
        test: /\.js[x]?$/,
		    loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
      },
	    // css
      {
        test: /\.css$/,
		    use: extractCSS.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
	    // sass/scss
	    {
				test: /\.scss$/,
				use: [{
						loader: "style-loader" // creates style nodes from JS strings
				}, {
						loader: "css-loader" // translates CSS into CommonJS
				}, {
						loader: "sass-loader" // compiles Sass to CSS
				}]
		    // use: extractSCSS.extract({
        //   fallback: "style-loader", // creates style nodes from JS strings
        //   use: [
		    //     "css-loader" // translates CSS into CommonJS
		    //   , "sass-loader" // compiles Sass to CSS
		    //   ]
        // })
	    },
	    // images
	    {
        test: /\.(png|svg|jpg|gif)$/,
		    use: [
		      {
			      loader: 'url-loader',
		        options: {
			        limit: 8192
			      }
		      },
		      {
			      loader: 'file-loader',
		      }
		    ]
	    },
	    // font
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
	    // csv
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
	    // xml
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  },
  resolve: {
	  extensions: ['.js', '.jsx'],
    modules: [
      webpackConstants.PATH_SRC,
      webpackConstants.PATH_NODE_MODULES,
      webpackConstants.PATH_PUBLIC,
		]
  },
  // watch options
  watchOptions: {
    ignored: /node_modules/
  }
};