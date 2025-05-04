import { Request, Response } from 'express';
import { CustomerService } from './customer.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';

const createNewCustomer = catchAsync(async (req: Request, res: Response) => {
  const { name, email, phone } = req.body;
  const customerData = { name, email, phone };
  const result = await CustomerService.createCustomer(customerData);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Customer Created successfuly!',
    data: result,
  });
});

const fetchAllCustomers = catchAsync(async (req: Request, res: Response) => {
  const result = await CustomerService.getAllCustomers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customers fetched successfuly!',
    data: result,
  });
});

const getASpecificCustomer = catchAsync(async (req: Request, res: Response) => {
  const { customerId } = req.params;

  const result = await CustomerService.getByIdFromDB(customerId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer fetched successfully',
    data: result,
  });
});

const updateCustomer = catchAsync(async (req: Request, res: Response) => {
  const { customerId } = req.params;

  const result = await CustomerService.updateIntoDB(customerId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer updated successfully!',
    data: result,
  });
});

const deleteCustomer = catchAsync(async (req: Request, res: Response) => {
  const { customerId } = req.params;

  await CustomerService.deleteFromDB(customerId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Customer deleted successfully',
    data: null,
  });
});

export const CustomerController = {
  createNewCustomer,
  fetchAllCustomers,
  getASpecificCustomer,
  updateCustomer,
  deleteCustomer,
};
