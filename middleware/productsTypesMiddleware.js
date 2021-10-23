const { response, request } = require("express");
const { isValidObjectId } = require("mongoose");
const { getProductTypeBy_Id } = require("../helpers/productsTypesHelpers");

// ---------------------------------------
// asignar el Id del Encabezado al Cuerpo
// ---------------------------------------
exports.assignTheProductTypeIdToTheBody = (
  req = request,
  res = response,
  next
) => {
  const { id } = req.params;
  req.body.productType = id;
  return next();
};

// ---------------------------------------
// Obtener la tipo del producto por el Id
// ---------------------------------------
exports.getProductTypeByBodyId = async (
  req = request,
  res = response,
  next
) => {
  try {
    let id = req.body.productType;

    // valida que el Id no sea
    if (!id) {
      return res.status(400).json({
        msg: "El Id del tipo producto es requerido",
      });
    }

    // validar el Id
    const isValid = isValidObjectId(id);
    if (!isValid) {
      return res.status(400).json({
        msg: "No es un Id valido para el tipo de producto",
      });
    }

    // buscar la tipo del producto por el Id
    const productTypeResp = await getProductTypeBy_Id(id);

    if (!productTypeResp.productType) {
      return res.status(400).json({
        msg: productTypeResp,
      });
    }

    const { productType } = productTypeResp;
    req.productType = productType;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};
