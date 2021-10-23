const ProductBrand = require("../models/ProductBrand");
const ProductType = require("../models/ProductType");
const brands = require("./data/brands.json");
const types = require("./data/types.json");
const products = require("./data/products.json");
const Products = require("../models/Products");

exports.addingSendData = () => {
  const productBrandId = dataProductBrands();
  const productTypeId = dataProductTypes();
  dataProduct(productTypeId, productBrandId);
};

const dataProductBrands = () => {
  let id;
  brands.map((brand) => {
    const brandNew = new ProductBrand(brand);
    brandNew.save();
    id = brandNew._id;
  });

  return id;
};
const dataProductTypes = () => {
  let id;
  types.map((type) => {
    const typesNew = new ProductType(type);
    typesNew.save();
    id = typesNew._id;
  });

  return id;
};

const dataProduct = async (productTypeId_, ProductBrandId_) => {
  products.map((product) => {
    product.productType = productTypeId_;
    product.productBrand = ProductBrandId_;
    productNew = new Products(product);
    productNew.save();
  });
};
