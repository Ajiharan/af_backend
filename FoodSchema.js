const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  code: {
    type: String,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  amount: {
    type: Number,
    trim: true,
  },
  size: {
    type: Number,
    trim: true,
  },
  categories: [mongoose.Schema.Types.ObjectId]
});
module.exports = mongoose.model("foodschemas", FoodSchema);
