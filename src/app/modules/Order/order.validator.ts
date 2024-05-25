import { z } from "zod";


const OrderValidationSchema = z.object({
    email: z.string(),
    productId: z.string(),
    price: z.number(),
    quantity: z.number()
});

export {
    // ProductVariantSchema,
    // ProductInventorySchema,
    OrderValidationSchema
}