const mongoose = require("mongoose");

const calculateSchema = new mongoose.Schema(
  {
    calculateName: { type: String, required: true },
    calculatePrice: { type: Number, required: true },
  },
  { timestamps: true }
);

const calculateModel = new mongoose.model("calculModel", calculateSchema);

module.exports = calculateModel;
