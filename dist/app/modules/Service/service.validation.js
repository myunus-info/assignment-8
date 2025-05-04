"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceValidations = exports.updateServiceSchema = exports.createServiceSchema = void 0;
const zod_1 = require("zod");
// Validation schema for creating a service record
exports.createServiceSchema = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string().uuid('Invalid UUID format for bikeId'),
        serviceDate: zod_1.z.coerce.date().refine(date => !isNaN(date.getTime()), {
            message: 'Invalid date format for serviceDate',
        }),
        description: zod_1.z
            .string()
            .min(1, 'Description is required')
            .max(500, 'Description must be 500 characters or less'),
        status: zod_1.z.enum(['pending', 'in-progress', 'done'], {
            errorMap: () => ({ message: 'Status must be one of: pending, in-progress, done' }),
        }),
    }),
});
// Validation schema for updating a service record
exports.updateServiceSchema = zod_1.z.object({
    body: zod_1.z.object({
        bikeId: zod_1.z.string().uuid('Invalid UUID format for bikeId').optional(),
        serviceDate: zod_1.z.coerce
            .date()
            .refine(date => !isNaN(date.getTime()), {
            message: 'Invalid date format for serviceDate',
        })
            .optional(),
        description: zod_1.z
            .string()
            .min(1, 'Description is required')
            .max(500, 'Description must be 500 characters or less')
            .optional(),
        status: zod_1.z
            .enum(['pending', 'in-progress', 'done'], {
            errorMap: () => ({ message: 'Status must be one of: pending, in-progress, done' }),
        })
            .optional(),
    }),
});
exports.ServiceValidations = {
    createServiceSchema: exports.createServiceSchema,
    updateServiceSchema: exports.updateServiceSchema,
};
