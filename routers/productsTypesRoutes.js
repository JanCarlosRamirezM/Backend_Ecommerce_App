const express = require("express");
const { body } = require("express-validator");
const productsTypesController = require("../controllers/productsTypesController");
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

  productsTypesController.CreateProductType
);

//GET: api/productsTypes
router.get("/", productsTypesController.GetProductsTypes);

//GET: api/productsTypes/id
router.get("/:id", productsTypesController.GetProductTypeById);

//DELETE: api/productsTypes/id
router.delete("/:id", productsTypesController.DeleteProductType);

//PUT: api/productsTypes/id
router.put("/:id", productsTypesController.UpdateProductType);

module.exports = router;
