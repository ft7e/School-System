'use strict';
const Course = (sequelize, DataTypes) =>
  sequelize.define('courses', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    possibleTeacher: {
      type: DataTypes.STRING,
    },
    enrolledCount: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  });
module.exports = Course;
