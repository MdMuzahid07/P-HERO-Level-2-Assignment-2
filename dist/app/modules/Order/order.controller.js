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
exports.OrderController = void 0;
const order_service_1 = require("./order.service");
const order_validator_1 = require("./order.validator");
const GetOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const email = (_a = req.query) === null || _a === void 0 ? void 0 : _a.email;
        if (email) {
            const result = yield order_service_1.OrderService.searchOrders(email.toString().trim());
            res.status(200).json({
                success: true,
                message: "orders fetched successfully for user email",
                data: result,
            });
        }
        else {
            const result = yield order_service_1.OrderService.fetchOrders();
            res.status(200).json({
                success: true,
                message: "Orders fetched successfully!",
                data: result,
            });
        }
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Orders fetching failed",
            error: error.message,
        });
    }
});
const CreateOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order = req.body;
        console.log(order);
        const ValidatedOrder = order_validator_1.OrderValidationSchema.parse(order);
        const result = yield order_service_1.OrderService.createOrder(ValidatedOrder);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Order creation failed",
            error: error.message,
        });
    }
});
exports.OrderController = {
    GetOrders,
    CreateOrder
};
