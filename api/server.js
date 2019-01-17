const express = require('express');

const configureMiddleware = require('../config/middleware.js');
const dishesRouter = require('../routes/dishesRouter.js');

const server = express();

// Middleware
configureMiddleware(server);

// routes
server.use('/dishes', dishesRouter);


module.exports = server;