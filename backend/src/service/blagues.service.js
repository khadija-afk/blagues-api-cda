const db = require("../model");
const Blague = db.Blague;

module.exports = {
  ajouter: contenu => Blague.create({ contenu }),
  toutes: () => Blague.findAll(),
  une: id => Blague.findByPk(id),
  random: async () => {
    const count = await Blague.count();
    const randomIndex = Math.floor(Math.random() * count);
    return Blague.findOne({ offset: randomIndex });
  }
};
