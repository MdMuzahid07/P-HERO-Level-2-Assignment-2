import { ProductT } from "./product.infterface";
import ProductModel from "./product.schema.model"


const fetchProducts = async () => {
    const res = await ProductModel.find({});
    return res;
};


const createProduct = async (product: ProductT) => {
    const productData = new ProductModel(product);
    const res = await productData.save();
    return res;
}




export const ProductServices = {
    fetchProducts,
    createProduct
}