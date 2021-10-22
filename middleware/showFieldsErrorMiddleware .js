const { validationResult } = require("express-validator");
const { response, request } = require("express");

exports.showFieldsErrorMiddleware = async (
  req = request,
  res = response,
  next
) => {
  const errors = await validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
