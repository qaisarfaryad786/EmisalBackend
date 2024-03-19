import express, { Request, Response, Application, NextFunction } from 'express';
import ApiError from './utils/ApiError';
import httpStatus  from 'http-status';
import adminLogin from './routes/adminLogin.route';
const app: Application = express();

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));


 app.use('/adminLogin', adminLogin);

app.use((req: Request, res: Response, next: NextFunction) => {
    next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
  });

export default app;