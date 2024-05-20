"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Example data for testing
let items = [
    { id: 1, name: 'Apple', price: 1.99, inventory: 100 }, // Changed from 'quantity' to 'inventory'
    { id: 2, name: 'Banana', price: 0.99, inventory: 50 }, // Changed from 'quantity' to 'inventory'
];
const addItem = (item) => {
    const newItem = Object.assign(Object.assign({}, item), { id: items.length + 1 });
    items.push(newItem);
    return newItem;
};
const getAllItems = () => {
    return items;
};
const deleteItem = (itemId) => {
    const index = items.findIndex(item => item.id === itemId);
    if (index !== -1) {
        items.splice(index, 1);
        return true;
    }
    return false;
};
const updateItem = (itemId, updatedItem) => {
    const index = items.findIndex(item => item.id === itemId);
    if (index !== -1) {
        items[index] = Object.assign(Object.assign({}, items[index]), updatedItem);
        return true;
    }
    return false;
};
const updateInventory = (itemId, newInventory) => {
    const index = items.findIndex(item => item.id === itemId);
    if (index !== -1) {
        items[index].inventory = newInventory; // Change from 'quantity' to 'inventory'
        return true;
    }
    return false;
};
exports.default = { addItem, getAllItems, deleteItem, updateItem, updateInventory };
