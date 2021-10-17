const ProductBrand = require("../models/ProductBrand");
const ProductType = require("../models/ProductType");
const brands = require("./data/brands.json");
const types = require("./data/types.json");
const products = require("./data/products.json");
const Products = require("../models/Products");

exports.addingSendData = async () => {
  // 1
  // dataProductBrands();
  // 2
  //  dataProductTypes();
  // 3
  // dataProduct();
};

const dataProductBrands = () => {
  brands.map((brand) => {
    brandNew = new ProductBrand(brand);
    brandNew.save();
  });
};
const dataProductTypes = () => {
  types.map((type) => {
    typesNew = new ProductType(type);
    typesNew.save();
  });
};

const dataProduct = async () => {
  const productTypeDb = await ProductType.findOne();
  const ProductBrandDb = await ProductBrand.findOne();

  products.map((product) => {
    product.productTypeId = productTypeDb._id;
    product.productBrandId = ProductBrandDb._id;
    productNew = new Products(product);
    productNew.save();
  });
};
