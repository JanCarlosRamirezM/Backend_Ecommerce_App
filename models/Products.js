const { Schema, model, Decimal128 } = require("mongoose");

const ProductSchema = Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  description: {
    type: String,
    trim: true,
  },

  price: {
    type: Decimal128,
  },

  pictureUrl: {
    type: String,
    trim: true,
  },

  created: {
    type: Date,
    default: Date.now(),
  },

  productTypeId: {
    type: Schema.Types.ObjectId,
    ref: "ProductType",
  },

  productBrandId: {
    type: Schema.Types.ObjectId,
    ref: "ProductBrand",
  },
});

module.exports = model("Product", ProductSchema);
