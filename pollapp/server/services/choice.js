import Choice from '../models/choice.js';

export const createChoice = async (data) => Choice.create(data);
