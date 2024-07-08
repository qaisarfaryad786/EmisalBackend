import express from 'express';
const router = express.Router();
import {getAllUser} from '../controller';
import {authenticate}   from '../middlewares/auth.middleware';

router.get('/',authenticate,getAllUser.getAllUsers);

export default router;
