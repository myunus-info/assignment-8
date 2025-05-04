import { z } from 'zod';

// Validation schema for creating a service record
export const createServiceSchema = z.object({
  body: z.object({
    bikeId: z.string().uuid('Invalid UUID format for bikeId'),
    serviceDate: z.coerce.date().refine(date => !isNaN(date.getTime()), {
      message: 'Invalid date format for serviceDate',
    }),
    description: z
      .string()
      .min(1, 'Description is required')
      .max(500, 'Description must be 500 characters or less'),
    status: z.enum(['pending', 'in-progress', 'done'], {
      errorMap: () => ({ message: 'Status must be one of: pending, in-progress, done' }),
    }),
  }),
});

// Validation schema for updating a service record
export const updateServiceSchema = z.object({
  body: z.object({
    bikeId: z.string().uuid('Invalid UUID format for bikeId').optional(),
    serviceDate: z.coerce
      .date()
      .refine(date => !isNaN(date.getTime()), {
        message: 'Invalid date format for serviceDate',
      })
      .optional(),
    description: z
      .string()
      .min(1, 'Description is required')
      .max(500, 'Description must be 500 characters or less')
      .optional(),
    status: z
      .enum(['pending', 'in-progress', 'done'], {
        errorMap: () => ({ message: 'Status must be one of: pending, in-progress, done' }),
      })
      .optional(),
  }),
});

export const ServiceValidations = {
  createServiceSchema,
  updateServiceSchema,
};
