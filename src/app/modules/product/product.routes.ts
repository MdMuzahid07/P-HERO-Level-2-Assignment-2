import express from "express";
import { ProductController } from "./product.controller";

const router = express.Router();

router.post("/products", ProductController.PostProduct);
router.get("/products", ProductController.GetProducts);
router.get("/products/:productId", ProductController.GetProductById);
router.delete("/products/:productId", ProductController.ProductDeleteById);
router.put("/products/:productId", ProductController.UpdateProduct);

export const ProductRoutes = router;
