"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminController_1 = __importDefault(require("../controllers/adminController"));
const router = express_1.default.Router();
router.post('/items', adminController_1.default.addItem);
router.get('/items', adminController_1.default.getItems);
router.delete('/items/:itemId', adminController_1.default.deleteItem);
router.put('/items/:itemId', adminController_1.default.updateItem);
router.post('/items/:itemId/inventory', adminController_1.default.manageInventory);
exports.default = router;
