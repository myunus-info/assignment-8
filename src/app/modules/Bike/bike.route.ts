import express from 'express';
import { BikeController } from './bike.controller';
import validateRequest from '../../middleware/validateRequest';
import { BikeValidations } from './bike.validation';

const router = express.Router();

router
  .route('/')
  .post(validateRequest(BikeValidations.createBikeSchema), BikeController.addNewBike)
  .get(BikeController.fetchAllBikes);

router.get('/:bikeId', BikeController.getASpecificBike);

export const BikeRoutes = router;
