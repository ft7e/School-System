'use strict';

const Student = (sequelize, DataTypes) => {
  return sequelize.define('students', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    enrolledCourse: {
      type: DataTypes.STRING,
    },
  });
};
module.exports = Student;
