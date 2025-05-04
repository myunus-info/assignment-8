import { Request, Response } from 'express';
import { BikeService } from './bike.service';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';

const addNewBike = catchAsync(async (req: Request, res: Response) => {
  const { brand, model, year, customerId } = req.body;
  const bikeData = { brand, model, year, customerId };
  const result = await BikeService.addBike(bikeData);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Bike added successfuly!',
    data: result,
  });
});

const fetchAllBikes = catchAsync(async (req: Request, res: Response) => {
  const result = await BikeService.getAllBikes();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bikes fetched successfuly!',
    data: result,
  });
});

const getASpecificBike = catchAsync(async (req: Request, res: Response) => {
  const { bikeId } = req.params;

  const result = await BikeService.getByIdFromDB(bikeId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bike fetched successfully',
    data: result,
  });
});

export const BikeController = {
  addNewBike,
  fetchAllBikes,
  getASpecificBike,
};
