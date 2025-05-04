import prisma from '../../../shared/prisma';
import { TBike } from './bike.interface';
import { Bike, Customer } from '../../../../generated/prisma';

const addBike = async (bikeData: TBike): Promise<Bike> => {
  const newBike = await prisma.bike.create({
    data: bikeData,
  });

  return newBike;
};

const getAllBikes = async () => {
  const allBikes = await prisma.bike.findMany();
  return allBikes;
};

const getByIdFromDB = async (bikeId: string): Promise<Bike | null> => {
  const result = await prisma.bike.findUnique({
    where: {
      bikeId,
    },
  });

  return result;
};

export const BikeService = {
  addBike,
  getAllBikes,
  getByIdFromDB,
};
