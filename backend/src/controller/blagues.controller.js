const service = require("../service/blagues.service");

exports.create = async (req, res) => {
  try {
    const blague = await service.createBlague(req.body);
    res.status(201).json(blague);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.findAll = async (req, res) => {
  const blagues = await service.getAllBlagues();
  res.json(blagues);
};

exports.findOne = async (req, res) => {
  const blague = await service.getBlagueById(req.params.id);
  if (!blague) return res.status(404).json({ message: "Blague non trouvée" });
  res.json(blague);
};

exports.random = async (req, res) => {
  const blague = await service.getRandomBlague();
  if (!blague) {
    return res.status(404).json({ message: "Aucune blague disponible" });
  }
  res.json(blague);
};
