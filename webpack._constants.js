/*** Utilities ***/
const path = require('path');

/*** Constants ***/
const HTML_TEMPLATE_NAME = 'html-webpack-plugin-template.html';
const HTML_OUTPUT_NAME = 'index.html';
const SERVICE_WORKER_FILENAME = 'service-worker.js';

module.exports = {
	
	// Names
	
	HTML_TEMPLATE_NAME: HTML_TEMPLATE_NAME,
	HTML_OUTPUT_NAME: HTML_OUTPUT_NAME,
	SERVICE_WORKER_FILENAME: SERVICE_WORKER_FILENAME,

	// Paths (Vendor)
	
	PATH_NODE_MODULES: path.resolve(__dirname, 'node_modules'),
	PATH_SERVICE_WORKER: path.resolve(__dirname, 'Public', 'dist', SERVICE_WORKER_FILENAME),
	
	// Paths (src & dist)
	
	PATH_PUBLIC: path.resolve(__dirname, 'Public'),
	PATH_SRC: path.resolve(__dirname, 'Public', 'src'),
	PATH_DIST: path.resolve(__dirname, 'Public', 'dist'),
	
	// Paths (dist - index)
	
	PATH_DIST_INDEX: path.resolve(__dirname, 'Public', 'dist', HTML_OUTPUT_NAME),
	
	// Paths (src - html)
	
	PATH_HTML: path.resolve(__dirname, 'Public', 'src', 'html'),
	PATH_HTML_TEMPLATE: path.resolve(__dirname, 'Public', 'src', 'html', HTML_TEMPLATE_NAME),
	
	// Paths (src - js)
	
	PATH_JS_ALL: path.resolve(__dirname, 'Public', 'src', 'reactjs', '*.js*'),
	PATH_REACTJS_INDEX: path.resolve(__dirname, 'Public', 'src', 'reactjs', 'index.jsx'),
	PATH_REACTJS_INDEX_TEST: path.resolve(__dirname, 'Public', 'src', 'reactjs', 'index.js'),

	// Routes & Paths (src - css)
	
	ROUTE_CSS: '/css',
	PATH_CSS: path.resolve(__dirname, 'Public', 'src', 'css'),
	
	// Routes & Paths (src - font)
	
	ROUTE_FONT: '/font',
	PATH_FONT: path.resolve(__dirname, 'Public', 'src', 'font'),
	
	// Routes & Paths (src - img)
	
	ROUTE_IMG: '/img',
	PATH_IMG: path.resolve(__dirname, 'Public', 'src', 'img'),
	
};