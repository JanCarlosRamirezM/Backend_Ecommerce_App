const ProductType = require("../models/ProductType");

exports.getProductTypeById = async (id) => {
  try {
    const productType = await ProductType.findById(id);

    if (!productType) {
      return "Tipo de Producto no encontrado";
    }

    return { productType };
  } catch (error) {
    console.log();
    return "Hubo un error en el server";
  }
};
