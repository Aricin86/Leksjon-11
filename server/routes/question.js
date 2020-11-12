import express from 'express';
import { questionController } from '../controllers/index.js';

const router = express.Router();

router.post('/', questionController.create);
router.get('/:id/choices', questionController.listChoices);

export default router;
