const express = require("express");
const controller = require("../controller/blagues.controller");

const router = express.Router();

router.post("/", controller.create);
router.get("/", controller.findAll);
router.get("/random", controller.random);
router.get("/:id", controller.findOne);

module.exports = router;
