import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  age: number;
  phone?: string;
  createdAt: Date;
}

const UserSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    index: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  age: {
    type: Number,
    required: [true, 'Age is required'],
    min: [0, 'Age cannot be negative'],
    max: [100, 'Age cannot be greater than 100']
  },
  phone: {
    type: String,
    trim: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<IUser>('User', UserSchema);
