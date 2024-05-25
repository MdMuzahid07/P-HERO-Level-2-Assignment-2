import { NextFunction, Request, Response } from "express";
import { OrderService } from "./order.service";
import { OrderValidationSchema } from "./order.validator";



const GetOrders = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const email = req.query?.email;

        if (email) {
            const result = await OrderService.searchOrders(email.toString().trim());
            res.status(200).json({
                success: true,
                message: "orders fetched successfully for user email"!,
                data: result,
            });
        } else {
            const result = await OrderService.fetchOrders();

            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        }

    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Orders fetching failed",
            error: error.message,
        });
    }
};


const CreateOrder = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const order = req.body;

        console.log(order);

        const ValidatedOrder = OrderValidationSchema.parse(order)

        const result = await OrderService.createOrder(ValidatedOrder);

        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    } catch (error: any) {
        res.status(500).json({
            success: false,
            message: "Order creation failed",
            error: error.message,
        });
    }
};


export const OrderController = {
    GetOrders,
    CreateOrder
}