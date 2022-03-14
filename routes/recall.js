const express = require("express");
const router = express.Router();

const recallController = require("./../controllers/recall");

router
  .route("/")
  .get(recallController.getRecalls)
  .post(recallController.postRecalls);

router
  .route("/:manufacturerRecallNumber")
  .get(recallController.getRecallByManufacturerRecallNumber);

module.exports = router;
