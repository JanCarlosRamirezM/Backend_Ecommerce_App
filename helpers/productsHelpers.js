const Products = require("../models/Products");

exports.getProductBy_Id = async (id) => {
  try {
    if (!id) {
      return "El Id del producto es requerido";
    }

    const product = await Products.findById(id)
      .populate("productType", "name -_id")
      .populate("productBrand", "name -_id");

    if (!product) {
      return "Producto no encontrado";
    }

    return { product };
  } catch (error) {
    console.log(error);
    return "Hubo un error en el server";
  }
};
