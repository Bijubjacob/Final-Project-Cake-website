import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',         
  },
  isVerified: {
    type: Boolean,
    default: false, // This is a default value for unverified users
  },
}, { timestamps: true });

const User = mongoose.model('user', UserSchema, 'users');

export default User;
