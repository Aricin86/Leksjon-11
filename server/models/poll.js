import mongoose from 'mongoose';

const { Schema } = mongoose;

const PollSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: ['3', 'A title must have more than 3 characters.'],
      maxlength: ['40', 'A title must be less than 40 characters.'],
    },
    pollster: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'The poll must be created by a registered user.'],
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

PollSchema.virtual('questions', {
  ref: 'Question',
  localField: '_id',
  foreignField: 'poll',
  justOne: false,
});

const Poll = mongoose.model('Poll', PollSchema);

export default Poll;
