"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookGroceryItems = exports.getGroceries = void 0;
const groceryService_1 = require("../services/groceryService");
const getGroceries = (req, res) => {
    const groceries = (0, groceryService_1.getAllGroceries)();
    res.json(groceries);
};
exports.getGroceries = getGroceries;
const bookGroceryItems = (req, res) => {
    const { items } = req.body;
    if (!items || !Array.isArray(items)) {
        res.status(400).send('Invalid request');
        return;
    }
    const result = (0, groceryService_1.bookGroceries)(items);
    if (result === 'Order successfully booked!') {
        res.status(200).send(result);
    }
    else {
        res.status(400).send(result);
    }
};
exports.bookGroceryItems = bookGroceryItems;
