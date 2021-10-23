const { request, response } = require("express");
const ProductBrand = require("../models/ProductBrand");

exports.CreateProductBrand = async (req = request, res = response) => {
  try {
    const { name } = req.body;

    const newProductBrand = new ProductBrand({ name });
    newProductBrand.save();

    return res.status(200).json({
      productBrand: newProductBrand,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};

exports.GetProductsBrands = async (req = request, res = response) => {
  try {
    const productsBrands = await ProductBrand.find();

    return res.status(200).json(productsBrands);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};

exports.GetProductBrandById = async (req = request, res = response) => {
  return res.status(200).json(req.productBrand);
};

exports.UpdateProductBrand = async (req = request, res = response) => {
  try {
    const { _id } = req.productBrand;

    const updateProductBrand = {
      name: req.body.name,
    };

    const productBrand = await ProductBrand.findByIdAndUpdate(
      _id,
      updateProductBrand,
      {
        new: true,
      }
    );

    return res.status(200).json(productBrand);
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};

exports.DeleteProductBrand = async (req = request, res = response) => {
  try {
    const { _id } = req.productBrand;

    await ProductBrand.findByIdAndDelete(_id);

    return res.status(200).json({ msg: "Marca de producto eliminada" });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      msg: "Hubo un error en el server",
    });
  }
};
