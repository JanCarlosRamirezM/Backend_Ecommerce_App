const express = require("express");
const { body } = require("express-validator");
const {
  CreateProductBrand,
  GetProductsBrands,
  GetProductBrandById,
  DeleteProductBrand,
  UpdateProductBrand,
} = require("../controllers/productsBrandsController");
const {
  assignTheProductBrandIdToTheBody,
  getProductBrandByBodyId,
} = require("../middleware/productsBrandsMiddleware");
const {
  showFieldsErrorMiddleware,
} = require("../middleware/showFieldsErrorMiddleware ");
const { validateIdMiddleware } = require("../middleware/validateIdMiddleware");

const router = express.Router();

//POST: api/productsTypes
router.post(
  "/",
  [
    body("name", "El nombre es requerido").notEmpty(),
    showFieldsErrorMiddleware,
  ],

  CreateProductBrand
);

//GET: api/productsTypes
router.get("/", GetProductsBrands);

//GET: api/productsTypes/id
router.get(
  "/:id",
  [
    validateIdMiddleware,
    assignTheProductBrandIdToTheBody,
    getProductBrandByBodyId,
  ],
  GetProductBrandById
);

//DELETE: api/productsTypes/id
router.delete(
  "/:id",
  [
    validateIdMiddleware,
    assignTheProductBrandIdToTheBody,
    getProductBrandByBodyId,
  ],
  DeleteProductBrand
);

//PUT: api/productsTypes/id
router.put(
  "/:id",
  [
    validateIdMiddleware,
    assignTheProductBrandIdToTheBody,
    getProductBrandByBodyId,
  ],
  UpdateProductBrand
);

module.exports = router;
