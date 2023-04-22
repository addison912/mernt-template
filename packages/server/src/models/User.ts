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
    unique: true,
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
  date_updated: {
    type: Date,
    required: false,
  },
  last_login: {
    type: Date,
    required: false,
  },
  google_id: {
    type: String,
    required: false,
  },
});

userSchema.set('toJSON', {
  transform: function (_doc, ret) {
    delete ret['password'];
    return ret;
  },
});

const User = model<User & Document>('User', userSchema);

export default User;
