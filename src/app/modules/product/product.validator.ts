import { z } from "zod";


const ProductVariantSchema = z.object({
    type: z.string(),
    value: z.string()
});

const ProductInventorySchema = z.object({
    quantity: z.number(),
    inStock: z.boolean()
});

const ProductValidationSchema = z.object({
    name: z.string().trim(),
    description: z.string().trim(),
    price: z.number(),
    category: z.string().trim(),
    tags: z.array(z.string().trim()),
    variants: z.array(ProductVariantSchema),
    inventory: ProductInventorySchema
});

export {
    // ProductVariantSchema,
    // ProductInventorySchema,
    ProductValidationSchema
}