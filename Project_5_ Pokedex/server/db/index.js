const { Sequelize, DataTypes } = require("sequelize");
const { db } = require("./db");

// require each of your models
const Pokemon = db.define("Pokemon", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  trainer: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const Trainer = db.define("Trainer", {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});



// place your associations here!
Pokemon.belongsTo(Trainer);
Trainer.hasMany(Pokemon);

// export your models below

module.exports = {
  db, Pokemon, Trainer
};
