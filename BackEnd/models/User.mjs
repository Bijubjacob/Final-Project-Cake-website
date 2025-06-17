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
    default: false, // Default value for unverified users
  },
}, { timestamps: true });


// Create the model based on the schema
const User = mongoose.model('user', UserSchema, 'users');

export default User;
