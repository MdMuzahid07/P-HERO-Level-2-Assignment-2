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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderService = void 0;
const order_schema_model_1 = __importDefault(require("./order.schema.model"));
const fetchOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield order_schema_model_1.default.find({});
    return res;
});
const createOrder = (order) => __awaiter(void 0, void 0, void 0, function* () {
    const orderData = new order_schema_model_1.default(order);
    const res = yield orderData.save();
    return res;
});
const searchOrders = (searchText) => __awaiter(void 0, void 0, void 0, function* () {
    const search = searchText.toString();
    const order = yield order_schema_model_1.default.find({ email: search });
    return order;
});
exports.OrderService = {
    fetchOrders,
    createOrder,
    searchOrders
};
