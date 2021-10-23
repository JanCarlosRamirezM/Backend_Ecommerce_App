const express = require("express");
const { body } = require("express-validator");
const {
  CreateProduct,
  GetProducts,
  GetProductbyId,
  UpdateProduct,
  DeleteProduct,
} = require("../controllers/productsController");
const {
  getProductBrandByBodyId,
} = require("../middleware/productsBrandsMiddleware");
const {
  assignTheProductIdToTheBody,
  getProductByBodyId,
} = require("../middleware/productsMiddleware");
const {
  getProductTypeByBodyId,
} = require("../middleware/productsTypesMiddleware");
const {
  showFieldsErrorMiddleware,
} = require("../middleware/showFieldsErrorMiddleware ");
const { validateIdMiddleware } = require("../middleware/validateIdMiddleware");

const router = express.Router();

//POST: api/products
router.post(
  "/",
  body("name", "El nombre es requerido").notEmpty(),
  body("price", "El precio es requerido").notEmpty(),
  body(
    "productType",
    "No es un Id valido para el tipo de producto"
  ).isMongoId(),
  body(
    "productBrand",
    "No es un Id valido para la marca del producto"
  ).isMongoId(),
  [showFieldsErrorMiddleware, getProductTypeByBodyId, getProductBrandByBodyId],
  CreateProduct
);

//GET: api/products
router.get("/", GetProducts);

//GET: api/products/id
router.get(
  "/:id",
  [validateIdMiddleware, assignTheProductIdToTheBody, getProductByBodyId],
  GetProductbyId
);

//PUT: api/products/id
router.put(
  "/:id",

  [
    validateIdMiddleware,
    assignTheProductIdToTheBody,
    getProductByBodyId,
    getProductTypeByBodyId,
    getProductBrandByBodyId,
  ],
  UpdateProduct
);

// DELETE:
router.delete(
  "/:id",
  [validateIdMiddleware, assignTheProductIdToTheBody, getProductByBodyId],
  DeleteProduct
);

module.exports = router;
