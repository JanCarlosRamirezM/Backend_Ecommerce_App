const ProductType = require("../models/ProductType");

exports.getProductTypeBy_Id = async (id) => {
  try {
    if (!id) {
      return "El Id del tipo producto es requerido";
    }

    const productType = await ProductType.findById(id);

    if (!productType) {
      return "Tipo de Producto no encontrado";
    }

    return { productType };
  } catch (error) {
    console.log(error);
    return "Hubo un error en el server";
  }
};
