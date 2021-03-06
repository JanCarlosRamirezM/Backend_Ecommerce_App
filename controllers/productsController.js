const { request, response } = require("express");
const { getProductBy_Id } = require("../helpers/productsHelpers");
const Products = require("../models/Products");

exports.CreateProduct = async (req = request, res = response) => {
  try {
    const newProduct = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      pictureUrl: req.body.pictureUrl,
      productType: req.body.productType,
      productBrand: req.body.productBrand,
    };

    const product = new Products(newProduct);

    product.save();
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};

exports.GetProducts = async (req = request, res = response) => {
  try {
    const products = await Products.find()
      .populate("productType", "name -_id")
      .populate("productBrand", "name -_id");

    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};

exports.GetProductbyId = async (req = request, res = response) => {
  return res.status(200).json(req.product);
};

exports.UpdateProduct = async (req = request, res = response) => {
  try {
    const { _id } = req.product;

    const updateProduct = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      pictureUrl: req.body.pictureUrl,
      productType: req.body.productType,
      productBrand: req.body.productBrand,
    };

    // Actualizar registro
    const Product = await Products.findByIdAndUpdate(_id, updateProduct, {
      new: true,
    });

    return res.status(200).json(Product);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};

exports.DeleteProduct = async (req = request, res = response) => {
  try {
    const { _id } = req.product;

    await Products.findByIdAndDelete(_id);

    return res.status(200).json({ msg: "Producto eliminado" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};
