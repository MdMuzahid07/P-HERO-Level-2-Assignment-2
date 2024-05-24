import { ProductT } from "./product.infterface";
import ProductModel from "./product.schema.model";

const fetchProducts = async () => {
  const res = await ProductModel.find({});
  return res;
};

const fetchProductById = async (id: string) => {
  const res = await ProductModel.findOne({ _id: id });
  return res;
};

const createProduct = async (product: ProductT) => {
  const productData = new ProductModel(product);
  const res = await productData.save();
  return res;
};

const updateProduct = async (updatedData: ProductT, id: string) => {
  const filter = { _id: id };
  const res = await ProductModel.findOneAndUpdate(filter, updatedData);
  return res;
};

const deleteProductById = async (id: string) => {
  const res = await ProductModel.findOneAndDelete({ _id: id });
  return res;
};

const searchProduct = async (searchText: string) => {
  const search = new RegExp(searchText, "i");
  const product = await ProductModel.find({
    $or: [{ tags: { $regex: search } }, { name: { $regex: search } }],
  });
  return product;
};

export const ProductServices = {
  fetchProducts,
  createProduct,
  fetchProductById,
  deleteProductById,
  updateProduct,
  searchProduct,
};
