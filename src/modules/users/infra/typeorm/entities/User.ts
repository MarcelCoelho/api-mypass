//import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import mongoose from 'mongoose';

import IUser from '../../../../users/dtos/IUser';

const UserSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  password: String,
  url_photo: String,
  created_at: Date,
  updated_at: Date,
})

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
