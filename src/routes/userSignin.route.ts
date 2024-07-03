import express from 'express';
import { userSigninController } from '../controller';
import validate from '../middlewares/validate.middleware';
import {adminValidation} from '../validations';
const router = express.Router();

router.post('/',
userSigninController.userSigninController
 );

export default router;