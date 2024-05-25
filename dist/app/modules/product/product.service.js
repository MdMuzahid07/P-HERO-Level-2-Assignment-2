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
exports.ProductServices = void 0;
const product_schema_model_1 = __importDefault(require("./product.schema.model"));
const fetchProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_schema_model_1.default.find({});
    return res;
});
const fetchProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_schema_model_1.default.findOne({ _id: id });
    return res;
});
const createProduct = (product) => __awaiter(void 0, void 0, void 0, function* () {
    const productData = new product_schema_model_1.default(product);
    const res = yield productData.save();
    return res;
});
const updateProduct = (updatedData, id) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = { _id: id };
    const res = yield product_schema_model_1.default.findOneAndUpdate(filter, updatedData);
    return res;
});
const deleteProductById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield product_schema_model_1.default.findOneAndDelete({ _id: id });
    return res;
});
const searchProduct = (searchText) => __awaiter(void 0, void 0, void 0, function* () {
    const search = new RegExp(searchText, "i");
    const product = yield product_schema_model_1.default.find({
        $or: [{ tags: { $regex: search } }, { name: { $regex: search } }],
    });
    return product;
});
exports.ProductServices = {
    fetchProducts,
    createProduct,
    fetchProductById,
    deleteProductById,
    updateProduct,
    searchProduct,
};
