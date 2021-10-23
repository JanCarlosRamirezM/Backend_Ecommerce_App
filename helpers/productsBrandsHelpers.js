const ProductBrand = require("../models/ProductBrand");

exports.getProductBrandBy_Id = async (id) => {
  try {
    if (!id) {
      return "El Id de la marca producto es requerido";
    }

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
