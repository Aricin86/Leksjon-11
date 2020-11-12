import express from 'express';
import { pollExecutionController } from '../controllers/index.js';

const router = express.Router();

router.post('/', pollExecutionController.create);

export default router;
