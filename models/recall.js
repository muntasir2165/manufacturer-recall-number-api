const mongoose = require("mongoose");
const lodash = require("lodash");
const { axios, vrdAPIUrl } = require("../constants");

const Schema = mongoose.Schema;

const RecallSchema = new Schema({
  recallNumber: { type: String, required: true },
  manufactureName: { type: String },
  makeName: { type: String },
  manufacturerRecallNumber: { type: String },
  modelName: { type: String },
  recallYear: { type: String },
  createdOn: { type: Date, default: Date.now },
});

RecallSchema.pre("save", function (next) {
  axios
    .get(lodash.replace(vrdAPIUrl, "<recallNumber>", this.recallNumber))
    .then((result) => {
      const manufacturerRecallNumber =
        result?.data?.ResultSet[0]?.find(
          (info) => info.Name === "MANUFACTURER_RECALL_NO_TXT"
        ).Value.Literal || "N/A";
      this.manufacturerRecallNumber = manufacturerRecallNumber;
      next();
    })
    .catch((error) => {
      console.error(error);
      this.manufacturerRecallNumber = "N/A";
      next();
    });
});

module.exports = mongoose.model("Recall", RecallSchema);
