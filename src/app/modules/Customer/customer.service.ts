import prisma from '../../../shared/prisma';
import { TCustomer } from './customer.interface';
import { Customer } from '../../../../generated/prisma';

const createCustomer = async (customerData: TCustomer): Promise<Customer> => {
  const newCustomer = await prisma.customer.create({
    data: customerData,
  });

  return newCustomer;
};

const getAllCustomers = async () => {
  const allCustomers = await prisma.customer.findMany();
  return allCustomers;
};

const getByIdFromDB = async (customerId: string): Promise<Customer | null> => {
  const result = await prisma.customer.findUnique({
    where: {
      customerId,
    },
  });

  return result;
};

const updateIntoDB = async (
  customerId: string,
  data: Pick<Customer, 'name' | 'phone'>
): Promise<Customer> => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });

  const result = await prisma.customer.update({
    where: {
      customerId,
    },
    data,
  });

  return result;
};

const deleteFromDB = async (customerId: string): Promise<Customer | null> => {
  await prisma.customer.findUniqueOrThrow({
    where: {
      customerId,
    },
  });

  await prisma.customer.delete({
    where: {
      customerId,
    },
  });

  return null;
};

export const CustomerService = {
  createCustomer,
  getAllCustomers,
  getByIdFromDB,
  updateIntoDB,
  deleteFromDB,
};
