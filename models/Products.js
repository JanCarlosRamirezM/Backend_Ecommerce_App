const { Schema, model } = require("mongoose");

const ProductSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  created: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("Product", ProductSchema);
