"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidationSchema = void 0;
const zod_1 = require("zod");
const ProductVariantSchema = zod_1.z.object({
    type: zod_1.z.string(),
    value: zod_1.z.string()
});
const ProductInventorySchema = zod_1.z.object({
    quantity: zod_1.z.number(),
    inStock: zod_1.z.boolean()
});
const ProductValidationSchema = zod_1.z.object({
    name: zod_1.z.string().trim(),
    description: zod_1.z.string().trim(),
    price: zod_1.z.number(),
    category: zod_1.z.string().trim(),
    tags: zod_1.z.array(zod_1.z.string().trim()),
    variants: zod_1.z.array(ProductVariantSchema),
    inventory: ProductInventorySchema
});
exports.ProductValidationSchema = ProductValidationSchema;
