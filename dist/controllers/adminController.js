"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const itemModel_1 = __importDefault(require("../models/itemModel"));
const addItem = (req, res) => {
    const newItem = req.body;
    const addedItem = itemModel_1.default.addItem(newItem);
    res.status(201).json(addedItem);
};
const getItems = (req, res) => {
    const items = itemModel_1.default.getAllItems();
    res.json(items);
};
const deleteItem = (req, res) => {
    const itemId = parseInt(req.params.itemId, 10);
    const deletedItem = itemModel_1.default.deleteItem(itemId);
    if (deletedItem) {
        res.json({ message: 'Item deleted successfully' });
    }
    else {
        res.status(404).json({ error: 'Item not found' });
    }
};
const updateItem = (req, res) => {
    const itemId = parseInt(req.params.itemId, 10);
    const updatedItem = req.body;
    const result = itemModel_1.default.updateItem(itemId, updatedItem);
    if (result) {
        res.json({ message: 'Item updated successfully' });
    }
    else {
        res.status(404).json({ error: 'Item not found' });
    }
};
const manageInventory = (req, res) => {
    const itemId = parseInt(req.params.itemId, 10);
    const newInventory = req.body.inventory;
    const result = itemModel_1.default.updateInventory(itemId, newInventory);
    if (result) {
        res.json({ message: 'Inventory updated successfully' });
    }
    else {
        res.status(404).json({ error: 'Item not found' });
    }
};
exports.default = { addItem, getItems, deleteItem, updateItem, manageInventory };
