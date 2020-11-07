import Poll from '../models/poll.js';
import User from '../models/user.js';

export const createUser = async (data) => User.create(data);

export const listUserPolls = async (id) => {
  if (id) {
    const polls = await Poll.find({ pollster: id }).populate(
      'pollster',
      'username'
    );
    return polls;
  }
};
