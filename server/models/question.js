import mongoose from 'mongoose';

const { Schema } = mongoose;

const QuestionSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      minlength: ['6', 'A question must have more than 6 characters.'],
      maxlength: ['250', 'A question must be less than 250 characters.'],
    },
    poll: {
      type: mongoose.Schema.ObjectId,
      ref: 'Poll',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

QuestionSchema.virtual('choices', {
  ref: 'Choice',
  localField: '_id',
  foreignField: 'question',
  justOne: true,
});

const Question = mongoose.model('Question', QuestionSchema);

export default Question;
