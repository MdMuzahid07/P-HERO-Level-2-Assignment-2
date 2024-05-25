"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const product_service_1 = require("./product.service");
const GetProducts = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const searchTerm = req.query.searchTerm;
        if (searchTerm) {
            const result = yield product_service_1.ProductServices.searchProduct(searchTerm.toString().trim());
            res.status(200).json({
                success: true,
                message: `Products matching search term "${searchTerm.toString().trim()}" fetched successfully!`,
                data: result,
            });
        }
        else {
            const result = yield product_service_1.ProductServices.fetchProducts();
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Products fetching failed",
            error: error.message,
        });
    }
});
const GetProductById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.fetchProductById(productId);
        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Products fetching failed",
            error: error.message,
        });
    }
});
const PostProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const product = req.body;
        console.log(product);
        const result = yield product_service_1.ProductServices.createProduct(product);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Products creation failed",
            error: error.message,
        });
    }
});
const UpdateProduct = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const updateProduct = req.body;
        const result = yield product_service_1.ProductServices.updateProduct(updateProduct, productId);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Products update failed",
            error: error.message,
        });
    }
});
// const ProductSearch = async (
//     req: Request,
//     res: Response,
//     next: NextFunction,
// ) => {
//     try {
//         const search = req.query.searchTerm?.toString().trim();
//         const result = await ProductServices.searchProduct(search);
//         res.status(200).json({
//             success: true,
//             message: "Products matching search term 'iphone' fetched successfully!",
//             data: result,
//         });
//     } catch (error: any) {
//         res.status(500).json({
//             success: false,
//             message: "Products matching search term 'iphone' fetched failed!",
//             error: error.message,
//         });
//     }
// };
const ProductDeleteById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const result = yield product_service_1.ProductServices.deleteProductById(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Products delete failed",
            error: error.message,
        });
    }
});
exports.ProductController = {
    GetProducts,
    PostProduct,
    GetProductById,
    ProductDeleteById,
    UpdateProduct,
    // ProductSearch,
};
