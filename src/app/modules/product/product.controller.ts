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
        res.status(200).json({
            success: false,
            message: "Products fetching failed",
            error: error.message
        })
    }
};


export const ProductController = {
    GetProducts
}