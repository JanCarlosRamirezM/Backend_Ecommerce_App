const Products = require("../models/Products");

exports.getProductById = async (id) => {
  try {
    const product = await Products.findById(id);

    if (!product) {
      return "Producto no encontrado";
    }

    return { product };
  } catch (error) {
    console.log();
    return "Hubo un error en el server";
  }
};
