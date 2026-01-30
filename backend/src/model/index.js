const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./db.sqlite"
});

const db = {};
db.sequelize = sequelize;

db.Blague = require("./blague.model")(sequelize, DataTypes);

module.exports = db;
