
import mongoose from 'mongoose';

import IRegister from '../../../../registers/dtos/IRegister';

const RegisterSchema = new mongoose.Schema({
  id: String,
  name: String,
  description: String,
  url: String,
  url_photo: String,
  user: String,
  password: String,
  user_id: String,
  created_at: Date,
  updated_at: Date,
})

const Register = mongoose.model<IRegister>('Register', RegisterSchema);

export default Register;
