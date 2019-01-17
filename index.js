const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const server = express();

const db = knex(knexConfig.development);

server.use(express.json());



let port = 5000;
server.listen(port, () => console.log(`Server running on port ${port}`));
