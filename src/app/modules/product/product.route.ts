import express from "express";
import { ProductController } from "./product.controller";


const router = express.Router();

router.post("/products", ProductController.PostProduct);
router.get("/products", ProductController.GetProducts);



export const ProductRoutes = router;