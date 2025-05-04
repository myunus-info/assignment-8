import { Request, Response } from 'express';
import { ServiceService } from './service.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';

const createNewServiceRecord = catchAsync(async (req: Request, res: Response) => {
  const { bikeId, serviceDate, description, status } = req.body;
  const serviceData = { bikeId, serviceDate, description, status };
  const result = await ServiceService.createService(serviceData);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Service record Created successfuly!',
    data: result,
  });
});

const fetchAllServices = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.getAllServices();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service records fetched successfuly!',
    data: result,
  });
});

const getASpecificServiceRecord = catchAsync(async (req: Request, res: Response) => {
  const { serviceId } = req.params;

  const result = await ServiceService.getByIdFromDB(serviceId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service record fetched successfully',
    data: result,
  });
});

const updateServiceRecord = catchAsync(async (req: Request, res: Response) => {
  const { serviceId } = req.params;

  const result = await ServiceService.updateIntoDB(serviceId, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Service record updated successfully!',
    data: result,
  });
});

const getOverdueOrPendingServices = catchAsync(async (req: Request, res: Response) => {
  const result = await ServiceService.getOverdueOrPendingServices();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Overdue or pending services fetched successfully',
    data: result,
  });
});

export const ServiceController = {
  createNewServiceRecord,
  fetchAllServices,
  getASpecificServiceRecord,
  updateServiceRecord,
  getOverdueOrPendingServices,
};
