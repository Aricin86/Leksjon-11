import { questionService } from '../services/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const question = await questionService.createQuestion(req.body);
  res.status(201).json(question);
});

export const listChoices = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const choices = await questionService.listQuestionChoices(id);
  res.status(200).json(choices);
});
