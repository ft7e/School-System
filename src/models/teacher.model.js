'use strict';
const Teacher = (sequelize, DataTypes) =>
  sequelize.define('teachers', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    givingCourse: {
      type: DataTypes.STRING,
    },
  });

module.exports = Teacher;
