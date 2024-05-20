
import pool from '../config/db';
import { Item } from '../models/itemModel';

interface OrderItem {
  id: number;
  quantity: number;
}

// Get all grocery items
export const getAllGroceries = async (): Promise<Item[]> => {
  const result = await pool.query('SELECT * FROM items');
  return result.rows;
};

// Ability to book multiple grocery items in a single order
export const bookGroceries = async (items: OrderItem[]): Promise<string> => {
  try {
    // Begin transaction
    const client = await pool.connect();
    await client.query('BEGIN');

    for (const item of items) {
      const res = await client.query('SELECT * FROM items WHERE id = $1', [item.id]);
      const grocery = res.rows[0];

      if (!grocery || grocery.inventory < item.quantity) {
        await client.query('ROLLBACK');
        client.release();
        return `Item with id ${item.id} is not available in the requested quantity.`;
      }
    }

    for (const item of items) {
      const res = await client.query('SELECT * FROM items WHERE id = $1', [item.id]);
      const grocery = res.rows[0];
      
      if (grocery) {
        const newInventory = grocery.inventory - item.quantity;
        await client.query('UPDATE items SET inventory = $1 WHERE id = $2', [newInventory, item.id]);
      }
    }

    await client.query('COMMIT');
    client.release();
    return 'Order successfully booked!';
  } catch (error) {
    console.error(error);
    return 'An error occurred while booking the order.';
  }
};
