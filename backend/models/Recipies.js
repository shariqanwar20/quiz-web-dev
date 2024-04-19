const mongoose = require("mongoose");
const Ingredients = require("./Ingredients");

const RecipiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    default: "No description available"
  },
  image: {
    type: String,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  ingredients: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ingredients" }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Recipies = mongoose.model("Recipies", RecipiesSchema);

module.exports = Recipies;
