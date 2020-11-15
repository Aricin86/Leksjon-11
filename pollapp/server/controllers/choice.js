import { choiceService } from '../services/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const choice = await choiceService.createChoice(req.body);
  res.status(201).json(choice);
});
