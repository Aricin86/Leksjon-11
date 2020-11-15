import express from 'express';
import { choiceController } from '../controllers/index.js';

const router = express.Router();

router.post('/', choiceController.create);

export default router;
