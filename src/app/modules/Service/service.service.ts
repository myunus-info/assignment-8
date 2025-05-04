import prisma from '../../../shared/prisma';
import { TService } from './service.inerface';
import { Service } from '../../../../generated/prisma';

const createService = async (serviceData: TService): Promise<Service> => {
  const service = await prisma.service.create({
    data: serviceData,
  });

  return service;
};

const getAllServices = async () => {
  const allServices = await prisma.service.findMany();
  return allServices;
};

const getByIdFromDB = async (serviceId: string): Promise<Service | null> => {
  const result = await prisma.service.findUnique({
    where: {
      serviceId,
    },
  });

  return result;
};

const updateIntoDB = async (
  serviceId: string,
  data: Pick<Service, 'completionDate'>
): Promise<Service> => {
  await prisma.service.findUniqueOrThrow({
    where: {
      serviceId,
    },
  });

  const result = await prisma.service.update({
    where: {
      serviceId,
    },
    data,
  });

  return result;
};

const getOverdueOrPendingServices = async () => {
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  const result = await prisma.service.findMany({
    where: {
      status: {
        in: ['pending', 'in-progress'],
      },
      serviceDate: {
        lte: sevenDaysAgo,
      },
    },
  });

  return result;
};

export const ServiceService = {
  createService,
  getAllServices,
  getByIdFromDB,
  updateIntoDB,
  getOverdueOrPendingServices,
};
