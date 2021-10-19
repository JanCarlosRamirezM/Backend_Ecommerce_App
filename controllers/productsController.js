const { request, response } = require("express");
const productsHelpers = require("../helpers/productsHelpers");
const Products = require("../models/Products");

exports.CreateProduct = (req = request, res = response) => {
  try {
    const { name } = req.body;
    const product = new Products({ name });
    product.save();
    res.status(200).json(product);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};

exports.GetProducts = async (req = request, res = response) => {
  try {
    const products = await Products.find();

    res.status(200).json(products);
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};

exports.GetProductbyId = async (req = request, res = response) => {
  try {
    const { id } = req.params;

    const response = await productsHelpers.getProductById(id);

    if (!response.product) {
      res.status(400).json({
        msg: "Hubo un error en el server",
      });
    }
    res.status(200).json({ product: response.product });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};
