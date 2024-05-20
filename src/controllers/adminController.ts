import { Request, Response } from 'express';
import { addItem, getAllItems, deleteItem, updateItem, updateInventory } from '../services/admingroceryService';
import { Item } from '../models/itemModel';

// View existing grocery items
export const getItems = async (req: Request, res: Response): Promise<void> => {
  const items = await getAllItems();
  res.json(items);
};


//   Add new grocery items to the system
export const createItem = async (req: Request, res: Response): Promise<void> => {
  const newItem: Item = req.body;
  const createdItem = await addItem(newItem);
  res.status(201).json(createdItem);
};

// Remove grocery items from the system
export const removeItem = async (req: Request, res: Response): Promise<void> => {
  const itemId = parseInt(req.params.itemId, 10);
  const result = await deleteItem(itemId);
  if (result) {
    res.json({ message: 'Item deleted successfully' });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
};


//  Update details (e.g., name, price) of existing grocery items
export const modifyItem = async (req: Request, res: Response): Promise<void> => {
  const itemId = parseInt(req.params.itemId, 10);
  const updatedItem: Partial<Item> = req.body;
  const result = await updateItem(itemId, updatedItem);
  if (result) {
    res.json({ message: 'Item updated successfully' });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
};


//  Manage inventory levels of grocery items
export const changeInventory = async (req: Request, res: Response): Promise<void> => {
  const itemId = parseInt(req.params.itemId, 10);
  const newInventory = req.body.inventory;
  if (typeof newInventory !== 'number' || newInventory < 0) {
    res.status(400).json({ error: 'Invalid inventory value' });
    return;
  }

  const result = await updateInventory(itemId, newInventory);
  if (result) {
    res.json({ message: 'Inventory updated successfully' });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
};
