import express from 'express';
import { adminLoginController } from '../controller';
const router = express.Router();

router.get('/', adminLoginController.adminLogin);

export default router;