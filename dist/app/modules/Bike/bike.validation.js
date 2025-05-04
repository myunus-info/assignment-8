"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BikeValidations = exports.updateBikeSchema = exports.createBikeSchema = void 0;
const zod_1 = require("zod");
// Validation schema for creating a bike
exports.createBikeSchema = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z.string().min(1, 'Brand is required').max(50, 'Brand must be 50 characters or less'),
        model: zod_1.z.string().min(1, 'Model is required').max(50, 'Model must be 50 characters or less'),
        year: zod_1.z
            .number()
            .int()
            .min(1900, 'Year must be 1900 or later')
            .max(new Date().getFullYear(), 'Year cannot be in the future'),
        customerId: zod_1.z.string().uuid('Invalid UUID format for customerId'),
    }),
});
// Validation schema for updating a bike
exports.updateBikeSchema = zod_1.z.object({
    body: zod_1.z.object({
        brand: zod_1.z
            .string()
            .min(1, 'Brand is required')
            .max(50, 'Brand must be 50 characters or less')
            .optional(),
        model: zod_1.z
            .string()
            .min(1, 'Model is required')
            .max(50, 'Model must be 50 characters or less')
            .optional(),
        year: zod_1.z
            .number()
            .int()
            .min(1900, 'Year must be 1900 or later')
            .max(new Date().getFullYear(), 'Year cannot be in the future')
            .optional(),
        customerId: zod_1.z.string().uuid('Invalid UUID format for customerId').optional(),
    }),
});
exports.BikeValidations = {
    createBikeSchema: exports.createBikeSchema,
    updateBikeSchema: exports.updateBikeSchema,
};
