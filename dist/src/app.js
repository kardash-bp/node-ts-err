"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const notFound_1 = __importDefault(require("./middleware/notFound"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)('tiny'));
app.use((0, cors_1.default)({ origin: 'http://localhost:3000' }));
// compresses all the responses
app.use((0, compression_1.default)());
app.get('/', (req, res) => {
    throw new Error('Test Error');
    res.send('Express + TypeScript Server');
});
app.use(notFound_1.default);
app.use(errorHandler_1.default);
exports.default = app;
