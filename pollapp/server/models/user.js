import mongoose from 'mongoose';
import validator from 'validator';
import argon2 from 'argon2';

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required.'],
      unique: true,
      minlength: [3, 'A username must have at least 3 characters.'],
      maxlength: [20, 'A username must be 20 characters or less.'],
    },
    email: {
      type: String,
      required: [true, 'Email is needed.'],
      unique: true,
      validate: [validator.isEmail, 'The email address is not valid.'],
    },
    password: {
      type: String,
      required: [true, 'Password is needed.'],
      minlength: [4, 'The password need to have a minimum of 4 characters.'],
      maxlength: [25, 'The password must be 25 characters or less.'],
      select: false,
    },
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.pre('save', async function (next) {
  this.password = await argon2.hash(this.password);
  next();
});

UserSchema.virtual('polls', {
  ref: 'Poll',
  localField: '_id',
  foreignField: 'pollster',
  justOne: false,
});

UserSchema.virtual('pollExecutions', {
  ref: 'PollExecution',
  localField: '_id',
  foreignField: 'respondent',
  justOne: false,
});

const User = mongoose.model('User', UserSchema);

export default User;
