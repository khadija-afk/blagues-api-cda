module.exports = (sequelize, DataTypes) => {
    const Blague = sequelize.define("Blague", {
      contenu: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
  
    return Blague;
  };
  