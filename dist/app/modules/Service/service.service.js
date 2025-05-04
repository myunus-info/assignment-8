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
exports.ServiceService = void 0;
const prisma_1 = __importDefault(require("../../../shared/prisma"));
const createService = (serviceData) => __awaiter(void 0, void 0, void 0, function* () {
    const service = yield prisma_1.default.service.create({
        data: serviceData,
    });
    return service;
});
const getAllServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const allServices = yield prisma_1.default.service.findMany();
    return allServices;
});
const getByIdFromDB = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.service.findUnique({
        where: {
            serviceId,
        },
    });
    return result;
});
const updateIntoDB = (serviceId, data) => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma_1.default.service.findUniqueOrThrow({
        where: {
            serviceId,
        },
    });
    const result = yield prisma_1.default.service.update({
        where: {
            serviceId,
        },
        data,
    });
    return result;
});
const getOverdueOrPendingServices = () => __awaiter(void 0, void 0, void 0, function* () {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const result = yield prisma_1.default.service.findMany({
        where: {
            status: {
                in: ['pending', 'in-progress'],
            },
            serviceDate: {
                lte: sevenDaysAgo,
            },
        },
    });
    return result;
});
exports.ServiceService = {
    createService,
    getAllServices,
    getByIdFromDB,
    updateIntoDB,
    getOverdueOrPendingServices,
};
