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

//GET: api/productsTypes/616b754a21adb5b0da786941
router.get("/:id", productsTypesController.GetProductTypeById);

//DELETE: api/productsTypes/616b754a21adb5b0da786941
router.delete("/:id", productsTypesController.DeleteProductType);

//PUT: api/productsTypes/UpdateProductType
router.put("/:id", productsTypesController.UpdateProductType);

module.exports = router;
