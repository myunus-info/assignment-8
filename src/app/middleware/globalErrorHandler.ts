import {
  PrismaClientValidationError,
  PrismaClientKnownRequestError,
} from '@prisma/client/runtime/library';
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
  let statusCode = httpStatus.INTERNAL_SERVER_ERROR;
  let success = false;
  let message = err.message || 'Something went wrong!';
  let error = err;

  if (err instanceof PrismaClientValidationError) {
    message = 'Validation Error';
    error = err.message;
  } else if (err instanceof PrismaClientKnownRequestError) {
    if (err.code === 'P2002') {
      message = 'Duplicate Key error';
      error = err.meta;
    }
  }

  res.status(statusCode).json({
    success,
    status: statusCode,
    message,
    stack: error?.stack || null,
  });
};

export default globalErrorHandler;
