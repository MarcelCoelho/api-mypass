//import { createConnection } from 'typeorm';

import mongoose from 'mongoose';


mongoose.connect(process.env.MONGO_URL || '', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//createConnection();

