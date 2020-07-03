import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';

//import AppError from '@shared/errors/AppError';
import routes from './routes';
import '../../../infra/typeorm';
import '../../container';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  return response.status(500).json({
    status: 'error',
    message: `Internal server error: ${err.message}`,
  });
});

app.listen(process.env.PORT || 3000);
