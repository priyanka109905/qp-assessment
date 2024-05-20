// src/routes/groceryRoutes.ts

import { Router } from 'express';
import { getGroceries, bookGroceryOrder } from '../controllers/userController';

const router = Router();

router.get('/groceries', getGroceries);
router.post('/groceries/book', bookGroceryOrder);

export default router;
