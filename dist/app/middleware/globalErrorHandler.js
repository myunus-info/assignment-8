"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const library_1 = require("@prisma/client/runtime/library");
const http_status_1 = __importDefault(require("http-status"));
const globalErrorHandler = (err, req, res, next) => {
    let statusCode = http_status_1.default.INTERNAL_SERVER_ERROR;
    let success = false;
    let message = err.message || 'Something went wrong!';
    let error = err;
    if (err instanceof library_1.PrismaClientValidationError) {
        message = 'Validation Error';
        error = err.message;
    }
    else if (err instanceof library_1.PrismaClientKnownRequestError) {
        if (err.code === 'P2002') {
            message = 'Duplicate Key error';
            error = err.meta;
        }
    }
    res.status(statusCode).json({
        success,
        status: statusCode,
        message,
        stack: (error === null || error === void 0 ? void 0 : error.stack) || null,
    });
};
exports.default = globalErrorHandler;
