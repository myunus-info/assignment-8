"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeRoutes = void 0;
const express_1 = __importDefault(require("express"));
const bike_controller_1 = require("./bike.controller");
const validateRequest_1 = __importDefault(require("../../middleware/validateRequest"));
const bike_validation_1 = require("./bike.validation");
const router = express_1.default.Router();
router
    .route('/')
    .post((0, validateRequest_1.default)(bike_validation_1.BikeValidations.createBikeSchema), bike_controller_1.BikeController.addNewBike)
    .get(bike_controller_1.BikeController.fetchAllBikes);
router.get('/:bikeId', bike_controller_1.BikeController.getASpecificBike);
exports.BikeRoutes = router;
