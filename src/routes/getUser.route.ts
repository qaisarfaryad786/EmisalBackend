import express from 'express';
const router = express.Router();
import {userDashboard} from '../controller';
import {authenticate}   from '../middlewares/auth.middleware';

router.get('/',authenticate,userDashboard.user_Dashboard);

export default router;
