import mongoose from 'mongoose';

export default interface IUser extends mongoose.Document {
  id: string;
  name: string;
  email: string;
  password: string;
  url_photo: string;
  created_at: Date;
  updated_at: Date;
}
