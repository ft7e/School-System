'use strict';
require('dotenv').config();

//local require
const server = require('./src/server');
const { db } = require('./src/models/index.model');

let PORT = process.env.PORT || 3010;

db.sync()
  .then(() => {
    server.start(PORT);
  })
  .catch(console.error);
