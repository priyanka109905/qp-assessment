"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./config/db"));
const testDbConnection = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Attempt to run a simple query
        const res = yield db_1.default.query('SELECT NOW()');
        console.log('Database connection successful:', res.rows[0]);
    }
    catch (err) {
        console.error('Database connection error:', err);
    }
    finally {
        // Close the database pool to end the process
        yield db_1.default.end();
    }
});
// Run the test
testDbConnection();
