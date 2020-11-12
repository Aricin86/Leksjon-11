import mongoose from 'mongoose';

const { Schema } = mongoose;

const PollExecutionSchema = new Schema(
  {
    respondent: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'You have to be a registered user to take a poll.'],
    },
    poll: {
      type: mongoose.Schema.ObjectId,
      ref: 'Poll',
      required: true,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

const PollExecution = mongoose.model('PollExecution', PollExecutionSchema);

export default PollExecution;
