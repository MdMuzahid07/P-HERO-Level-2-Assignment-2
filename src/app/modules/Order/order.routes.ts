import express from "express";
import { OrderController } from "./order.controller";

const router = express.Router();

router.post("/orders", OrderController.CreateOrder);
router.get("/orders", OrderController.GetOrders);

export const OrderRoutes = router;
