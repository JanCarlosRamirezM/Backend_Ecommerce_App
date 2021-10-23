const { request, response } = require("express");
const productsTypesHelpers = require("../helpers/productsTypesHelpers");
const ProductType = require("../models/ProductType");

exports.CreateProductType = async (req = request, res = response) => {
  try {
    const { name } = req.body;

    const newProductType = new ProductType({ name });
    newProductType.save();

    return res.status(200).json({
      productType: newProductType,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};

exports.GetProductsTypes = async (req = request, res = response) => {
  try {
    const productsTypes = await ProductType.find();

    return res.status(200).json(productsTypes);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};

exports.GetProductTypeById = async (req = request, res = response) => {
  return res.status(200).json(req.productType);
};

exports.UpdateProductType = async (req = request, res = response) => {
  try {
    const { _id } = req.productType;

    const updateProductType = {
      name: req.body.name,
    };

    const productType = await ProductType.findByIdAndUpdate(
      _id,
      updateProductType,
      {
        new: true,
      }
    );

    return res.status(200).json(productType);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};

exports.DeleteProductType = async (req = request, res = response) => {
  try {
    const { _id } = req.productType;

    await ProductType.findByIdAndDelete(_id);

    return res.status(200).json({ msg: "Tipo de producto eliminado" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};
