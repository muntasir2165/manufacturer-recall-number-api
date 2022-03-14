const lodash = require("lodash");
const Recall = require("../models/recall");

exports.getRecalls = async (req, res, next) => {
  const recalls = await Recall.find({});
  res.status(200).json(recalls);
};

exports.postRecalls = async (req, res, next) => {
  if (lodash.isArray(req.body)) {
    try {
      const existingRecalls = await Recall.find({});
      const existingRecallNumbers = existingRecalls.map(
        (recall) => recall.recallNumber
      );
      const areProvidedRecallsValid = req.body.every(
        (recall) =>
          recall.recallNumber &&
          !existingRecallNumbers.includes(recall.recallNumber)
      );

      if (areProvidedRecallsValid) {
        const recalls = [];
        for (const recall of req.body) {
          await Recall.create(recall);
        }

        res.status(201).json({ success: true });
      } else {
        throw new Error("Invalid input");
      }
    } catch (error) {
      error.status = 400;
      next(error);
    }
  }
};

exports.getRecallByManufacturerRecallNumber = async (req, res, next) => {
  const { manufacturerRecallNumber } = req.params;
  try {
    const recall = await Recall.find({ manufacturerRecallNumber });
    res.status(200).json(recall);
  } catch (error) {
    error.status = 400;
    next(error);
  }
};
