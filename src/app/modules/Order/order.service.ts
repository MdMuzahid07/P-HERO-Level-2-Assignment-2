import { OrderT } from "./order.interface";
import OrderModel from "./order.schema.model";

const fetchOrders = async () => {
    const res = await OrderModel.find({});
    return res;
};

const createOrder = async (order: OrderT) => {
    const orderData = new OrderModel(order);
    const res = await orderData.save();
    return res;
};

const searchOrders = async (searchText: string) => {
    const search = searchText.toString();
    const order = await OrderModel.find({ email: search });
    return order;
};

export const OrderService = {
    fetchOrders,
    createOrder,
    searchOrders
}