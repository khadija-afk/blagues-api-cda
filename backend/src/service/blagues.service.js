const { Blague } = require("../model");

const createBlague = (data) => Blague.create(data);

const getAllBlagues = () => Blague.findAll();

const getBlagueById = (id) => Blague.findByPk(id);

const getRandomBlague = async () => {
  const blagues = await Blague.findAll();
  const randomIndex = Math.floor(Math.random() * blagues.length);
  return blagues[randomIndex];
};

module.exports = {
  createBlague,
  getAllBlagues,
  getBlagueById,
  getRandomBlague,
};
