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
exports.BikeService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const addBike = (bikeData) => __awaiter(void 0, void 0, void 0, function* () {
    const newBike = yield prisma_1.default.bike.create({
        data: bikeData,
    });
    return newBike;
});
const getAllBikes = () => __awaiter(void 0, void 0, void 0, function* () {
    const allBikes = yield prisma_1.default.bike.findMany();
    return allBikes;
});
const getByIdFromDB = (bikeId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.bike.findUnique({
        where: {
            bikeId,
        },
    });
    return result;
});
exports.BikeService = {
    addBike,
    getAllBikes,
    getByIdFromDB,
};
