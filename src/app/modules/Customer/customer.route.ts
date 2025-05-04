import express from 'express';
import { CustomerController } from './customer.controller';
import validateRequest from '../../middleware/validateRequest';
import { CustomerValidations } from './customer.validations';

const router = express.Router();

router
  .route('/')
  .post(
    validateRequest(CustomerValidations.createCustomerSchema),
    CustomerController.createNewCustomer
  )
  .get(CustomerController.fetchAllCustomers);

router
  .route('/:customerId')
  .get(CustomerController.getASpecificCustomer)
  .put(validateRequest(CustomerValidations.updateCustomerSchema), CustomerController.updateCustomer)
  .delete(CustomerController.deleteCustomer);

export const CustomerRoutes = router;
