import mongoose from 'mongoose';

const { Schema } = mongoose;

const EventSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
      min: ['6', 'A question must have more than 6 characters.'],
      max: ['250', 'A question must be less than 250 characters.'],
    },
    answer: {
      type: [String],
      required: true,
      validate: [
        (v) => Array.isArray(v) && v.length > 0,
        'There need to be at least 1 answer alternative.',
      ],
    },
    pollster: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'The poll must be created by a registered user.'],
    },
    respondents: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const Poll = mongoose.model('Poll', EventSchema);

export default Poll;
