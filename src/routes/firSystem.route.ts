import express from 'express';
import { firSystemController } from '../controller';
import validate from '../middlewares/validate.middleware';
import { firSystemSchema } from '../validations/fisSystem.validation';



const router = express.Router();

router.post('/',validate(firSystemSchema),firSystemController.addNewFirController);

export default router;