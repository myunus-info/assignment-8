"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerValidations = exports.updateCustomerSchema = exports.createCustomerSchema = void 0;
const zod_1 = require("zod");
// Validation schema for creating a customer
exports.createCustomerSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, 'Name is required').max(100, 'Name must be 100 characters or less'),
        email: zod_1.z
            .string()
            .email('Invalid email format')
            .max(255, 'Email must be 255 characters or less'),
        phone: zod_1.z.string().min(1, 'Phone is required').max(20, 'Phone must be 20 characters or less'),
    }),
});
// Validation schema for updating a customer
exports.updateCustomerSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string()
            .min(1, 'Name is required')
            .max(100, 'Name must be 100 characters or less')
            .optional(),
        email: zod_1.z
            .string()
            .email('Invalid email format')
            .max(255, 'Email must be 255 characters or less')
            .optional(),
        phone: zod_1.z
            .string()
            .min(1, 'Phone is required')
            .max(20, 'Phone must be 20 characters or less')
            .optional(),
    }),
});
exports.CustomerValidations = {
    createCustomerSchema: exports.createCustomerSchema,
    updateCustomerSchema: exports.updateCustomerSchema,
};
