import { model, Schema, Document } from 'mongoose';
import { User } from '@interfaces/users.interface';

const userSchema: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  auth_code: {
    type: String,
    required: false,
  },
  authenticated: {
    type: Boolean,
    required: true,
    default: false,
  },
  date_created: {
    type: Date,
    required: false,
  },
  last_login: {
    type: Date,
    required: false,
  },
});

const userModel = model<User & Document>('User', userSchema);

export default userModel;
