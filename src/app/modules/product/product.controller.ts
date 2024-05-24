import { NextFunction, Request, Response } from "express";
import { ProductServices } from "./product.service";

const GetProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const searchTerm = req.query.searchTerm;

        if (searchTerm) {
            const result = await ProductServices.searchProduct(searchTerm.toString().trim());
            res.status(200).json({
                success: true,
                message: `Products matching search term "${searchTerm.toString().trim()}" fetched successfully!`,
                data: result,
            });
        } else {
            const result = await ProductServices.fetchProducts();

            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Products fetching failed",
            error: error.message,
        });
    }
};

const GetProductById = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { productId } = req.params;

        const result = await ProductServices.fetchProductById(productId);

        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Products fetching failed",
            error: error.message,
        });
    }
};

const PostProduct = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const product = req.body;

        console.log(product);

        const result = await ProductServices.createProduct(product);

        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Products creation failed",
            error: error.message,
        });
    }
};

const UpdateProduct = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { productId } = req.params;
        const updateProduct = req.body;

        const result = await ProductServices.updateProduct(
            updateProduct,
            productId,
        );

        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Products update failed",
            error: error.message,
        });
    }
};

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

const ProductDeleteById = async (
    req: Request,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { productId } = req.params;

        const result = await ProductServices.deleteProductById(productId);

        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: null,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Products delete failed",
            error: error.message,
        });
    }
};

export const ProductController = {
    GetProducts,
    PostProduct,
    GetProductById,
    ProductDeleteById,
    UpdateProduct,
    // ProductSearch,
};
