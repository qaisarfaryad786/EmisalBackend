import express from 'express';
import { adminLoginController } from '../controller';
import validate from '../middlewares/validate.middleware';
import {adminValidation} from '../validations';
const router = express.Router();

router.post('/',
 adminLoginController.adminLogin,
 );

export default router;