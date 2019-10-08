const express = require('express');
const helmet = require('helmet');

// Import my router when it has been created

const server = express();

server.use(helmet());
server.use(express.json());

// use my router on the server once created

module.exports = server;
