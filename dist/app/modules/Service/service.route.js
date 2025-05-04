"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const service_controller_1 = require("./service.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const service_validation_1 = require("./service.validation");
const router = express_1.default.Router();
router
    .route('/')
    .post((0, validateRequest_1.default)(service_validation_1.ServiceValidations.createServiceSchema), service_controller_1.ServiceController.createNewServiceRecord)
    .get(service_controller_1.ServiceController.fetchAllServices);
router.get('/status', service_controller_1.ServiceController.getOverdueOrPendingServices);
router
    .route('/:serviceId')
    .get(service_controller_1.ServiceController.getASpecificServiceRecord)
    .put((0, validateRequest_1.default)(service_validation_1.ServiceValidations.updateServiceSchema), service_controller_1.ServiceController.updateServiceRecord);
exports.ServiceRoutes = router;
