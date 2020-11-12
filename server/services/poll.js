import Poll from '../models/poll.js';
import Question from '../models/question.js';

export const getPollById = async (id) => Poll.findById(id);

export const listPolls = async () =>
  Poll.find().populate('pollster', 'username');

export const createPoll = async (data) => Poll.create(data);

export const updatePoll = async (id, data) =>
  Poll.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

export const removePoll = async (id) => {
  const poll = await Poll.findById(id);
  poll.remove();
};

export const listPollQuestions = async (id) => {
  if (id) {
    const questions = await Question.find({ poll: id }).populate('question');
    return questions;
  }
};
