import express, { Request, Response, Application, NextFunction } from 'express';
import ApiError from './utils/ApiError';
import httpStatus  from 'http-status';
import router from './routes';
import cookieParser from 'cookie-parser';
import cors from 'cors';  
const app: Application = express();

// parse json request body
app.use(express.json());
app.use(cors());

// Other middleware and routes
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



 app.use('/', router);

app.use((req: Request, res: Response, next: NextFunction) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
  });

export default app;