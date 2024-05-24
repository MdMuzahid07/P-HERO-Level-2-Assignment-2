import { NextFunction, Request, Response } from "express";
import { ProductServices } from "./product.service";


const GetProducts = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const result = await ProductServices.fetchProducts()

        res.status(200).json({
            success: true,
            message: "Products fetched successfully!",
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Products fetching failed",
            error: error.message
        })
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
            data: result
        })
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Products creation failed",
            error: error.message
        })
    }
}


export const ProductController = {
    GetProducts,
    PostProduct
}