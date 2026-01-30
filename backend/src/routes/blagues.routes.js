const express = require("express");
const router = express.Router();
const ctrl = require("../controller/blagues.controller");

// /api/v1/blagues
router.post("/", ctrl.ajouter);               // ajouter blague
router.get("/", ctrl.toutes);                 // toutes
router.get("/random", ctrl.random);           // random
router.get("/:id", ctrl.une);                 // une

module.exports = router;
