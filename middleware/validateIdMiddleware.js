const { request, response } = require("express");
const { isValidObjectId } = require("mongoose");

exports.validateIdMiddleware = (req = request, res = response, next) => {
  // validar el Id
  if (req.params.id) {
    const isValid = isValidObjectId(req.params.id);
    if (!isValid) {
      return res.status(400).json({
        msg: "El Id no es valido...",
      });
    }
  } else {
    return res.status(400).json({
      msg: "El Id es requerido...",
    });
  }
  next();
};
