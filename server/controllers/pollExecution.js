import { pollExecutionService } from '../services/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const pollExecution = await pollExecutionService.createPollExecution(
    req.body
  );
  res.status(201).json(pollExecution);
});
