import ProductModel from "./product.schema.model"


const fetchProducts = async () => {
    const res = await ProductModel.find({});
    return res;
};


export const ProductServices = {
    fetchProducts
}