const { response, request } = require("express");
const { isValidObjectId } = require("mongoose");
const { getProductBrandBy_Id } = require("../helpers/productsBrandsHelpers");

// ---------------------------------------
// Mover el Id del Encabezado al Body
// ---------------------------------------
exports.assignTheProductBrandIdToTheBody = (req = request, res = response, next) => {
  const { id } = req.params;
  req.body.productBrand = id;
  return next();
};

// ---------------------------------------
// Obtener la marca del producto por el Id
// ---------------------------------------
exports.getProductBrandByBodyId = async (
  req = request,
  res = response,
  next
) => {
  try {
    let id = req.body.productBrand;

    // valida que el Id no sea
    if (!id) {
      return res.status(400).json({
        msg: "El Id de la marca producto es requerido",
      });
    }

    // validar el Id
    const isValid = isValidObjectId(id);
    if (!isValid) {
      return res.status(400).json({
        msg: "No es un Id valido para la marca del producto",
      });
    }

    // buscar la marca del producto por el Id
    const productBrandResp = await getProductBrandBy_Id(id);

    if (!productBrandResp.productBrand) {
      return res.status(400).json({
        msg: productBrandResp,
      });
    }

    const { productBrand } = productBrandResp;
    req.productBrand = productBrand;
    next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};
