"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const OrderSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: [true, "email address must be added"]
    },
    productId: {
        type: String,
        required: [true, "product id must be added"]
    },
    price: {
        type: Number,
        required: [true, "price must be added"]
    },
    quantity: {
        type: Number,
        required: [true, "product quantity must be added"]
    }
});
const OrderModel = mongoose_1.default.model("Orders", OrderSchema);
exports.default = OrderModel;
