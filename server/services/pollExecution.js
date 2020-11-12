import PollExecution from '../models/pollExecution.js';

export const createPollExecution = async (data) => PollExecution.create(data);
