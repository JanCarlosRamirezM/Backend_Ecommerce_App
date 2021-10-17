const { Schema, model } = require("mongoose");

const ProductTypeShema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = model("ProductType", ProductTypeShema);
                         