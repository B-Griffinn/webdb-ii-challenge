const express = require('express');
const helmet = require('helmet');

// Import my router when it has been created
const carsRouter = require('../router(s)/cars-router.js');

const server = express();

server.use(helmet());
server.use(express.json());

// use my router on the server once created
server.use('/api/cars', carsRouter);

module.exports = server;
