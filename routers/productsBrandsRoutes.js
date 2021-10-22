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
  showFieldsErrorMiddleware,
} = require("../middleware/showFieldsErrorMiddleware ");

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
router.get("/:id", GetProductBrandById);

//DELETE: api/productsTypes/id
router.delete("/:id", DeleteProductBrand);

//PUT: api/productsTypes/id
router.put("/:id", UpdateProductBrand);

module.exports = router;
