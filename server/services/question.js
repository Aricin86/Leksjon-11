import Question from '../models/question.js';
import Choice from '../models/choice.js';

// export const getQuestionById = async (id) => Question.findById(id);

export const createQuestion = async (data) => Question.create(data);

export const listQuestionChoices = async (id) => {
  if (id) {
    const choices = await Choice.find({ question: id }).populate(
      'question',
      'choice'
    );
    return choices;
  }
};
