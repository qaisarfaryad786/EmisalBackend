import mongoose from 'mongoose';
import config from './Config/config';

import app from './app';

// const port= process.env.PORT;

mongoose
  .connect(config.mongoose.url)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error(
      `MongoDB connection error. Please make sure MongoDB is running. ${err}`,
    );
  });

app.listen(config.port, () => {
  console.info(`Listening to port ${config.port}`);
});

