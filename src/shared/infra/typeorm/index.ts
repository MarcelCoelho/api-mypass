//import { createConnection } from 'typeorm';

import mongoose from 'mongoose';


mongoose.connect('mongodb+srv://mypass:mypass2020@cluster0.4pdwq.mongodb.net/mypass?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//createConnection();

