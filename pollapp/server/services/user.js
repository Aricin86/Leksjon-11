import User from '../models/user.js';
import Poll from '../models/poll.js';
import PollExecution from '../models/pollExecution.js';

export const createUser = async (data) => User.create(data);

export const listUserPollsCreated = async (id) => {
  if (id) {
    const polls = await Poll.find({ pollster: id }).populate(
      'pollster',
      'username'
    );
    return polls;
  }
};

export const listUserPollsTaken = async (id) => {
  if (id) {
    const polls = await PollExecution.find({ respondent: id }).populate(
      'pollster',
      'username'
    );
    return polls;
  }
};
