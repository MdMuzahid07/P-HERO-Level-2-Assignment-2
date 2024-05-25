"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRoutes = void 0;
const express_1 = __importDefault(require("express"));
const product_controller_1 = require("./product.controller");
const router = express_1.default.Router();
router.post("/products", product_controller_1.ProductController.PostProduct);
router.get("/products", product_controller_1.ProductController.GetProducts);
router.get("/products/:productId", product_controller_1.ProductController.GetProductById);
router.delete("/products/:productId", product_controller_1.ProductController.ProductDeleteById);
router.put("/products/:productId", product_controller_1.ProductController.UpdateProduct);
exports.ProductRoutes = router;
