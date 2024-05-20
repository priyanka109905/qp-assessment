import pool from '../config/db';
import { Item } from '../models/itemModel';


export const addItem = async (item: Item): Promise<Item> => {
  const result = await pool.query(
    'INSERT INTO items (name, price, inventory) VALUES ($1, $2, $3) RETURNING *',
    [item.name, item.price, item.inventory]
  );
  return result.rows[0];
};

export const getAllItems = async (): Promise<Item[]> => {
  const result = await pool.query('SELECT * FROM items');
  return result.rows;
};

export const deleteItem = async (itemId: number): Promise<boolean> => {
  const result = await pool.query('DELETE FROM items WHERE id = $1', [itemId]);
  return (result.rowCount ?? 0) > 0;
};

export const updateItem = async (itemId: number, updatedItem: Partial<Item>): Promise<boolean> => {
  const { name, price, inventory } = updatedItem;
  const result = await pool.query(
    'UPDATE items SET name = COALESCE($1, name), price = COALESCE($2, price), inventory = COALESCE($3, inventory) WHERE id = $4',
    [name, price, inventory, itemId]
  );
  return (result.rowCount ?? 0) > 0;
};

export const updateInventory = async (itemId: number, newInventory: number): Promise<boolean> => {
  const result = await pool.query(
    'UPDATE items SET inventory = $1 WHERE id = $2',
    [newInventory, itemId]
  );
  return (result.rowCount ?? 0) > 0;
};
