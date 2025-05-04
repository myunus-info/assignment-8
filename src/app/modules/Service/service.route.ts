import express from 'express';
import { ServiceController } from './service.controller';
import validateRequest from '../../middleware/validateRequest';
import { ServiceValidations } from './service.validation';

const router = express.Router();

router
  .route('/')
  .post(
    validateRequest(ServiceValidations.createServiceSchema),
    ServiceController.createNewServiceRecord
  )
  .get(ServiceController.fetchAllServices);

router.get('/status', ServiceController.getOverdueOrPendingServices);

router
  .route('/:serviceId')
  .get(ServiceController.getASpecificServiceRecord)
  .put(
    validateRequest(ServiceValidations.updateServiceSchema),
    ServiceController.updateServiceRecord
  );

export const ServiceRoutes = router;
