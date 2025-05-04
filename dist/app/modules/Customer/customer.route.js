"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRoutes = void 0;
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("./customer.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const customer_validations_1 = require("./customer.validations");
const router = express_1.default.Router();
router
    .route('/')
    .post((0, validateRequest_1.default)(customer_validations_1.CustomerValidations.createCustomerSchema), customer_controller_1.CustomerController.createNewCustomer)
    .get(customer_controller_1.CustomerController.fetchAllCustomers);
router
    .route('/:customerId')
    .get(customer_controller_1.CustomerController.getASpecificCustomer)
    .put((0, validateRequest_1.default)(customer_validations_1.CustomerValidations.updateCustomerSchema), customer_controller_1.CustomerController.updateCustomer)
    .delete(customer_controller_1.CustomerController.deleteCustomer);
exports.CustomerRoutes = router;
