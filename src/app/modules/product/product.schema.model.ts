import mongoose, { model } from "mongoose"
import { InventoryT, ProductT, VariantT } from "./product.infterface";


const ProductVariant = new mongoose.Schema<VariantT>({
    type: String,
    value: String
});

const ProductInventory = new mongoose.Schema<InventoryT>({
    quantity: {
        type: Number,
        required: [true, "product quantity must be added"]
    },
    isStock: {
        type: Boolean,
        required: [true, "please add an boolean value for Stock indication"]
    }
})


const ProductSchema = new mongoose.Schema<ProductT>({
    name: {
        type: String,
        required: [true, "product name must be added"],
        trim: true,
        maxlength: [100, "product name cannot be more than 100 character"]
    },
    description: {
        type: String,
        required: [true, "product description must be added"]
    },
    price: {
        type: Number,
        required: [true, "product can't be free, please add a price"],
        maxlength: [12, "price cannot more than 12 digits"]
    },
    category: {
        type: String,
        required: [true, "category must be added"]
    },
    tags: {
        type: [String],
        required: [true, "product tags must be added for better search"]
    },
    variants: {
        type: [ProductVariant],
        required: [true, "product variants must be added"]
    },
    inventory: {
        type: ProductInventory,
        required: [true, "Product inventory must be added"]
    }
});


// create a model using Product scheme 

const ProductModel = mongoose.model<ProductT>("Product", ProductSchema);


export default ProductModel;