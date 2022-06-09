'use strict';
// Essentials
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3010;

// Local requires
const studentRouter = require('./routes/student.route');
const notFoundErrorHandler = require('./error-handlers/404');
const internalErrorHandler = require('./error-handlers/500');

//Routes
app.use(express.json());
app.use(studentRouter);
app.use('*', notFoundErrorHandler);
app.use(internalErrorHandler);

// start function
function start(PORT) {
  app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
  });
}

module.exports = {
  app: app,
  start: start,
};
