import mongoose from "mongoose";
import { OrderT } from "./order.interface";


const OrderSchema = new mongoose.Schema<OrderT>({
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



const OrderModel = mongoose.model<OrderT>("Orders", OrderSchema);

export default OrderModel;