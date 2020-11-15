import express from 'express';
import { userController } from '../controllers/index.js';

const router = express.Router();

router.post('/', userController.create);
router.get('/:id/polls', userController.listPollsCreated);
router.get('/:id/pollExecutions', userController.listPollsTaken);

export default router;
