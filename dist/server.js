"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
require("express-async-errors");
const app_1 = __importDefault(require("./src/app"));
// connect db
require("./database");
const port = process.env.PORT;
const server = http_1.default.createServer(app_1.default);
server.listen(port, () => {
    console.log(`[server]: CORS enabled server is running at https://localhost:${port}`);
});
