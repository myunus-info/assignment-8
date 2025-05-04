import { z } from 'zod';

// Validation schema for creating a bike
export const createBikeSchema = z.object({
  body: z.object({
    brand: z.string().min(1, 'Brand is required').max(50, 'Brand must be 50 characters or less'),
    model: z.string().min(1, 'Model is required').max(50, 'Model must be 50 characters or less'),
    year: z
      .number()
      .int()
      .min(1900, 'Year must be 1900 or later')
      .max(new Date().getFullYear(), 'Year cannot be in the future'),
    customerId: z.string().uuid('Invalid UUID format for customerId'),
  }),
});

// Validation schema for updating a bike
export const updateBikeSchema = z.object({
  body: z.object({
    brand: z
      .string()
      .min(1, 'Brand is required')
      .max(50, 'Brand must be 50 characters or less')
      .optional(),
    model: z
      .string()
      .min(1, 'Model is required')
      .max(50, 'Model must be 50 characters or less')
      .optional(),
    year: z
      .number()
      .int()
      .min(1900, 'Year must be 1900 or later')
      .max(new Date().getFullYear(), 'Year cannot be in the future')
      .optional(),
    customerId: z.string().uuid('Invalid UUID format for customerId').optional(),
  }),
});

export const BikeValidations = {
  createBikeSchema,
  updateBikeSchema,
};
