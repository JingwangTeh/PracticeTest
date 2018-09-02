/*** Modules ***/
const express = require('express');
const compression = require('compression');
const helmet = require('helmet');

/*** Utilities ***/
const path = require('path');

/*** Files ***/
const webpackConstants = require('./webpack._constants.js');



/*** Server ***/

// Create express server
const server = express();
server.set('port', process.env.PORT || 8081);



/*** Middleware ***/

server.use(helmet());
server.use(compression());
server.use(express.static(webpackConstants.PATH_DIST));
server.use(webpackConstants.ROUTE_CSS, express.static(webpackConstants.PATH_CSS));
server.use(webpackConstants.ROUTE_FONT, express.static(webpackConstants.PATH_FONT));
server.use(webpackConstants.ROUTE_IMG, express.static(webpackConstants.PATH_IMG));



/*** Route ***/

server.get("/sw.js", (req, res) => {
  res.sendFile(path.resolve(webpackConstants.PATH_SERVICE_WORKER));
});
server.all('/*', function (req, res) {
    res.sendFile(webpackConstants.PATH_DIST_INDEX);
});



/*** Listen ***/

// Serve the files on port 80.
/*server.listen(8081, 'localhost', () => {
  console.log('dev server listening on port 80');
});*/
server.listen(server.get('port'));


