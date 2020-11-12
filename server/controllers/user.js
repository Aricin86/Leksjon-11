import { userService } from '../services/index.js';

import catchAsyncErrors from '../middleware/catchAsync.js';

export const create = catchAsyncErrors(async (req, res, next) => {
  const user = await userService.createUser(req.body);
  res.status(201).json(user);
});

export const listPollsCreated = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const polls = await userService.listUserPollsCreated(id);
  res.status(200).json(polls);
});

export const listPollsTaken = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  const polls = await userService.listUserPollsTaken(id);
  res.status(200).json(polls);
});
