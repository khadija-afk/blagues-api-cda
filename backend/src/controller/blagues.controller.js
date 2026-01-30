const BlagueService = require("../service/blagues.service");

exports.ajouter = async (req, res) => {
  const { contenu } = req.body;
  const b = await BlagueService.ajouter(contenu);
  res.json(b);
};

exports.toutes = async (req, res) => {
  const blagues = await BlagueService.toutes();
  res.json(blagues);
};

exports.une = async (req, res) => {
  const blague = await BlagueService.une(req.params.id);
  res.json(blague);
};

exports.random = async (req, res) => {
  const blague = await BlagueService.random();
  res.json(blague);
};
