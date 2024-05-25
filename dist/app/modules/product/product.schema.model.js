"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const ProductVariant = new mongoose_1.default.Schema({
    type: String,
    value: String,
});
const ProductInventory = new mongoose_1.default.Schema({
    quantity: {
        type: Number,
        required: [true, "product quantity must be added"],
    },
    inStock: {
        type: Boolean,
        required: [true, "please add an boolean value for Stock indication"],
    },
});
const ProductSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "product name must be added"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "product description must be added"],
    },
    price: {
        type: Number,
        required: [true, "product can't be free, please add a price"],
    },
    category: {
        type: String,
        required: [true, "category must be added"],
    },
    tags: {
        type: [String],
        required: [true, "product tags must be added for better search"],
    },
    variants: {
        type: [ProductVariant],
        required: [true, "product variants must be added"],
    },
    inventory: {
        type: ProductInventory,
        required: [true, "Product inventory must be added"],
    },
});
// create a model using Product scheme
const ProductModel = mongoose_1.default.model("Product", ProductSchema);
exports.default = ProductModel;
