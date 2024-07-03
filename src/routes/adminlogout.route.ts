import express from 'express';
import { adminlogout } from '../controller';

const router = express.Router()

router.get('/',adminlogout.AdminLogoutController);

export default router;