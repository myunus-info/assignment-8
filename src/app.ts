import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import httpStatus from 'http-status';
import globalErrorHandler from './app/middleware/globalErrorHandler';

const app: Application = express();
app.use(cors());

// parser
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send({
    Message: 'Welcome to Bike Service Server',
  });
});

app.use('/api', router);

app.use(globalErrorHandler);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API NOT FOUND!',
    error: {
      path: req.originalUrl,
      message: 'Your requested path is not found!',
    },
  });
});

export default app;
