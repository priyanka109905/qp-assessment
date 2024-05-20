// src/controllers/groceryController.ts

import { Request, Response } from 'express';
import { getAllGroceries, bookGroceries } from '../services/userGroceryService';

// View the list of available grocery items
export const getGroceries = async (req: Request, res: Response) => {
  try {
    const groceries = await getAllGroceries();
    res.json(groceries);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Book groceries
export const bookGroceryOrder = async (req: Request, res: Response) => {
  const items = req.body.items;

  if (!Array.isArray(items)) {
    return res.status(400).json({ message: 'Items should be an array.' });
  }

  try {
    const message = await bookGroceries(items);
    res.json({ message });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
