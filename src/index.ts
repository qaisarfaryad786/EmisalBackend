import mongoose from 'mongoose';
import config from './Config/config';
import {AdminLoginModel} from './models';

import app from './app';

// const port= process.env.PORT;
// adminSeeder.js
// Initial admin credentials
const adminData = {
  username: 'admin',
  password: 'admin123'
};

// Function to seed admin data
async function seedAdmin() {
  try {
    // Check if admin already exists
    const existingAdmin = await AdminLoginModel.findOne({ username: adminData.username });
    if (existingAdmin) {
      console.log('Admin already exists.');
    } else {
      // Create admin if not exists
      await AdminLoginModel.create(adminData);
      console.log('Admin seeded successfully.');
    }
  } catch (error) {
    console.error('Error seeding admin:', error);
  } 
}

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
  seedAdmin();

app.listen(config.port, () => {
  console.info(`Listening to port ${config.port}`);
});

