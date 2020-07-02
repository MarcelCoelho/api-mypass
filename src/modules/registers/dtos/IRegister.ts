import mongoose from 'mongoose';

export interface IRegisterData {
  id: string;
  name: string;
  description: string;
  url: string;
  url_photo: string;
  user: string;
  password: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export interface IRegister extends mongoose.Document {
  id: string;
  name: string;
  description: string;
  url: string;
  url_photo: string;
  user: string;
  password: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}
