import { Request, Response } from 'express';
import User from '../models/User';
import mongoose from 'mongoose';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid id' });
    const user = await User.findById(id);
    if (!user) return res.status(404).json({ error: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, age, phone } = req.body;

    // Validaciones básicas
    if (!name || !email || age == null) {
      return res.status(400).json({
        error: 'Name, email and age are required'
      });
    }

    if (typeof age !== 'number' || age < 0 || age > 100) {
      return res.status(400).json({
        error: 'Age must be a number between 0 and 100'
      });
    }

    const newUser = await User.create({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      age,
      phone
    });

    return res.status(201).json(newUser);

  } catch (err: any) {
    console.error('CREATE USER ERROR:', err);

    if (err.code === 11000) {
      return res.status(409).json({ error: 'Email already exists' });
    }

    if (err.name === 'ValidationError') {
      return res.status(400).json({ error: err.message });
    }

    return res.status(500).json({ error: 'Server error' });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid id' });
    const updated = await User.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
    if (!updated) return res.status(404).json({ error: 'User not found' });
    res.json(updated);
  } catch (err:any) {
    res.status(500).json({ error: 'Server error', details: err.message });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid id' });
    const deleted = await User.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'User not found' });
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

// Extra endpoints: search by name, sort, min/max age, stats
export const searchByName = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    if (!name) return res.status(400).json({ error: 'Query param name required' });
    const users = await User.find({ name: new RegExp(String(name), 'i') });
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const sortByName = async (req: Request, res: Response) => {
  try {
    const order = req.query.order === 'desc' ? -1 : 1;

    const users = await User
      .find()
      //collation para que ordene correctamente con tildes y ñ
      .collation({ locale: 'es', strength: 1 }) // 👈 
      .sort({ name: order });

    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const minAgeUser = async (_: Request, res: Response) => {
  try {
    const user = await User.findOne().sort({ age: 1 }).limit(1);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const maxAgeUser = async (_: Request, res: Response) => {
  try {
    const user = await User.findOne().sort({ age: -1 }).limit(1);
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const stats = async (_: Request, res: Response) => {
  try {
    const agg = await User.aggregate([
      { $group: {
        _id: null,
        minAge: { $min: "$age" },
        maxAge: { $max: "$age" },
        avgAge: { $avg: "$age" },
        count: { $sum: 1 }
      }}
    ]);
    res.json(agg[0] || { minAge: null, maxAge: null, avgAge: null, count: 0 });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
