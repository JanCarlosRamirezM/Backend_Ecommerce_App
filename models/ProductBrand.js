const { Schema, model } = require("mongoose");

const ProductBrandShema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = model("ProductBrand", ProductBrandShema);
