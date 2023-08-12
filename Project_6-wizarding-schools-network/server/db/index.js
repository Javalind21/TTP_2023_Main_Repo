"use strict";
const { db, Sequelize } = require("./db");
// Require your models and make your associations
const School = db.define("School", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
  },
});
const Student = db.define("Student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  team: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: 'Please enter a valid email address',
      },
    },
  },
  magicalAbilityScore: {
    type: Sequelize.FLOAT,
    validate: {
      isFloat: {
        args: [0.0, 4.0],
        msg: 'GPA must be between 0.0 and 4.0',
      },
    },
  },
});
// changed
School.hasMany(Student);
Student.belongsTo(School);
//
module.exports = {
  db, School, Student
}