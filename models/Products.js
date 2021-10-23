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

  productType: {
    type: Schema.Types.ObjectId,
    ref: "ProductType",
    required: true,
  },

  productBrand: {
    type: Schema.Types.ObjectId,
    ref: "ProductBrand",
    required: true,
  },
});

ProductSchema.method("toJSON", function () {
  const { __v, ...object } = this.toObject();
  // Formatear precio
  let priceTemp = object.price;
  if (typeof priceTemp !== "undefined" && priceTemp !== null) {
    object.price = parseFloat(priceTemp.toString());
  }

  // Formatear tipo producto
  let productTypeTemp = object.productType;
  if (typeof productTypeTemp !== "undefined" && productTypeTemp !== null) {
    object.productType = productTypeTemp.name;
  }

  // Formatear marca producto
  let productBrandTemp = object.productBrand;
  if (typeof productBrandTemp !== "undefined" && productBrandTemp !== null) {
    object.productBrand = productBrandTemp.name;
  }

  return object;
});

module.exports = model("Product", ProductSchema);
