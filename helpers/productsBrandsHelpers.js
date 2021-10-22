const ProductBrand = require("../models/ProductBrand");

exports.getProductBrandById = async (id) => {
  try {
    const productBrand = await ProductBrand.findById(id);

    if (!productBrand) {
      return "Marca de Producto no encontrada";
    }

    return { productBrand };
  } catch (error) {
    console.log(error);
    return "Hubo un error en el server";
  }
};
