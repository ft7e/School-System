'use strict';
require('dotenv').config();
//require all models
const student = require('./student.model');
const teacher = require('./teacher.model');
const course = require('./teacher.model');
const Collection = require('./lib/collection.model');
// This to check which DB sequelize should connect to
const POSTGRES_URI =
  process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');
//this is for Heroku to accept SSL only
let sequelizeOptions =
  process.env.NODE_ENV === 'production'
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};
const sequelize = new Sequelize(POSTGRES_URI, sequelizeOptions);

const studentTable = student(sequelize, DataTypes);
const Student = new Collection(studentTable);

module.exports = {
  db: sequelize,
  Student: Student,
  //   Teacher: teacher(sequelize, DataTypes),
  //   Course: course(sequelize, DataTypes),
};
