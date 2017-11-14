// index.js
//
var express = require('express');
var logger = require('./config/logger');
var config = require('./config/config');    

//create app instance of express.js
var app = express();    

//pull in the configuration file
require('./config/express')(app, config);
logger.log("Creating HTTP server on port: " + config.port);

require('http').createServer(app).listen(config.port, function () {
	logger.log("HTTP Server listening on port: " + config.port + ", in " + app.get('env') + " mode");
});

module.exports = app;
