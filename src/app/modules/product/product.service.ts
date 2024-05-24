import { ProductT } from "./product.infterface";
import ProductModel from "./product.schema.model"


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


const deleteProductById = async (id: string) => {
    const res = await ProductModel.findOneAndDelete({ _id: id });
    return res;
};



export const ProductServices = {
    fetchProducts,
    createProduct,
    fetchProductById,
    deleteProductById
}