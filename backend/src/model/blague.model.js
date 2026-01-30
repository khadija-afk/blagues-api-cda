const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Blague", {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reponse: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
