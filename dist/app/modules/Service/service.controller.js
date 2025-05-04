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
exports.ServiceController = void 0;
const service_service_1 = require("./service.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const createNewServiceRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { bikeId, serviceDate, description, status } = req.body;
    const serviceData = { bikeId, serviceDate, description, status };
    const result = yield service_service_1.ServiceService.createService(serviceData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: 'Service record Created successfuly!',
        data: result,
    });
}));
const fetchAllServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.ServiceService.getAllServices();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service records fetched successfuly!',
        data: result,
    });
}));
const getASpecificServiceRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const result = yield service_service_1.ServiceService.getByIdFromDB(serviceId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service record fetched successfully',
        data: result,
    });
}));
const updateServiceRecord = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const result = yield service_service_1.ServiceService.updateIntoDB(serviceId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Service record updated successfully!',
        data: result,
    });
}));
const getOverdueOrPendingServices = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield service_service_1.ServiceService.getOverdueOrPendingServices();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Overdue or pending services fetched successfully',
        data: result,
    });
}));
exports.ServiceController = {
    createNewServiceRecord,
    fetchAllServices,
    getASpecificServiceRecord,
    updateServiceRecord,
    getOverdueOrPendingServices,
};
