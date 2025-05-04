import { z } from 'zod';

// Validation schema for creating a customer
export const createCustomerSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required').max(100, 'Name must be 100 characters or less'),
    email: z
      .string()
      .email('Invalid email format')
      .max(255, 'Email must be 255 characters or less'),
    phone: z.string().min(1, 'Phone is required').max(20, 'Phone must be 20 characters or less'),
  }),
});

// Validation schema for updating a customer
export const updateCustomerSchema = z.object({
  body: z.object({
    name: z
      .string()
      .min(1, 'Name is required')
      .max(100, 'Name must be 100 characters or less')
      .optional(),
    email: z
      .string()
      .email('Invalid email format')
      .max(255, 'Email must be 255 characters or less')
      .optional(),
    phone: z
      .string()
      .min(1, 'Phone is required')
      .max(20, 'Phone must be 20 characters or less')
      .optional(),
  }),
});

export const CustomerValidations = {
  createCustomerSchema,
  updateCustomerSchema,
};
