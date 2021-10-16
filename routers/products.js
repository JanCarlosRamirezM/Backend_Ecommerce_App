const express = require("express");
const productsController = require("../controllers/productsController");

const router = express.Router();

// api/products
router.post("/", productsController.CreateProduct);

// api/products
router.get("/", productsController.GetProducts);

// api/products
router.get("/:id", productsController.GetProduct);

module.exports = router;
