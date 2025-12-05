import dotenv from 'dotenv';
dotenv.config();
import connectDB from '../config/db';
import User from '../models/User';

const seed = async () => {
  await connectDB();
  await User.deleteMany({});
  const users = [
    { name: 'Ana Lopez', email: 'ana@example.com', age: 22, phone: '111-222' },
    { name: 'Carlos Perez', email: 'carlos@example.com', age: 35, phone: '222-333' },
    { name: 'María Gomez', email: 'maria@example.com', age: 28, phone: '333-444' },
    { name: 'Luis Torres', email: 'luis@example.com', age: 19, phone: '444-555' }
  ];
  await User.insertMany(users);
  console.log('Seed completed');
  process.exit(0);
};

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
