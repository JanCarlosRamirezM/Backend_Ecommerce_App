const { response, request } = require("express");
const { isValidObjectId } = require("mongoose");
const { getProductBy_Id } = require("../helpers/productsHelpers");

// ---------------------------------------
// asignar el Id del Encabezado al Cuerpo
// ---------------------------------------
exports.assignTheProductIdToTheBody = (req = request, res = response, next) => {
  const { id } = req.params;
  req.body.product = id;
  return next();
};

// ---------------------------------------
// Obtener el producto por el Id
// ---------------------------------------
exports.getProductByBodyId = async (req = request, res = response, next) => {
  try {
    let id = req.body.product;

    // Si esta en blanco no realizar la busqueda
    if (!id) {
      return next();
    }

    // validar el Id
    const isValid = isValidObjectId(id);
    if (!isValid) {
      return res.status(400).json({
        msg: "No es un Id valido para el tipo de producto",
      });
    }

    // buscar la tipo del producto por el Id
    const productResp = await getProductBy_Id(id);

    if (!productResp.product) {
      return res.status(400).json({
        msg: productResp,
      });
    }

    const { product } = productResp;
    req.product = product;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};
