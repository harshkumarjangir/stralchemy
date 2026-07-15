import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from './models/Admin.js';
import connectDB from './config/db.js';

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();
    console.log('MongoDB connected for admin seeding...');

    // Check if admin already exists
    const adminExists = await Admin.findOne({ email: 'admin@stralchemy.com' });
    
    if (adminExists) {
      console.log('Admin user already exists. Skipping seed.');
      process.exit(0);
    }

    // Create default admin
    const admin = new Admin({
      email: 'admin@stralchemy.com',
      password: 'admin', // Very simple password for dev. Change in prod!
    });

    await admin.save();
    console.log('Default admin user created successfully:');
    console.log('Email: admin@stralchemy.com');
    console.log('Password: admin');
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();
