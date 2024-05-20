import express from 'express';
import { getItems, createItem, removeItem, modifyItem, changeInventory } from '../controllers/adminController'

const router = express.Router();

router.post('/items', createItem);
router.get('/items', getItems);
router.delete('/items/:itemId', removeItem);
router.put('/items/:itemId', modifyItem);
router.post('/items/:itemId/inventory', changeInventory);

export default router;
