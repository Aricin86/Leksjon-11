import mongoose from 'mongoose';

const { Schema } = mongoose;

const ChoiceSchema = new Schema(
  {
    choice: {
      type: String,
      required: true,
      minlength: ['1', 'A choice must have at least 1 character.'],
      maxlength: ['100', 'A choice must have less than 100 characters.'],
    },
    question: {
      type: mongoose.Schema.ObjectId,
      ref: 'Question',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Choice = mongoose.model('Choice', ChoiceSchema);

export default Choice;
