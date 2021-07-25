import 'reflect-metadata';
import 'express-async-errors';
import './database';

import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';

import routes from './routes';
import AppError from 'errors/AppError';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  } else {
    res.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }

  next(err);
});

app.listen(3333, () => {
  console.log('Server started!');
});
