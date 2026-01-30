const { Sequelize } = require("sequelize");
const BlagueModel = require("./blague.model");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./backend/db.sqlite",
  logging: false,
});

const Blague = BlagueModel(sequelize);

module.exports = { sequelize, Blague };
