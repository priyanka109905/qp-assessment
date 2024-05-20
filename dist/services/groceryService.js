"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookGroceries = exports.getAllGroceries = void 0;
let groceryItems = [
    { id: 1, name: 'Apple', price: 0.5, quantityAvailable: 100 },
    { id: 2, name: 'Banana', price: 0.3, quantityAvailable: 150 },
    // Add more items as needed
];
const getAllGroceries = () => {
    return groceryItems;
};
exports.getAllGroceries = getAllGroceries;
const bookGroceries = (items) => {
    for (const item of items) {
        const grocery = groceryItems.find(g => g.id === item.id);
        if (!grocery || grocery.quantityAvailable < item.quantity) {
            return `Item with id ${item.id} is not available in the requested quantity.`;
        }
    }
    items.forEach(item => {
        const grocery = groceryItems.find(g => g.id === item.id);
        if (grocery) {
            grocery.quantityAvailable -= item.quantity;
        }
    });
    return 'Order successfully booked!';
};
exports.bookGroceries = bookGroceries;
