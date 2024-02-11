"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskCreateSchema = exports.boardPatchSchema = exports.boardGetSchema = exports.boardCreateSchema = void 0;
const boardCreateSchema_1 = __importDefault(require("./boardCreateSchema"));
exports.boardCreateSchema = boardCreateSchema_1.default;
const boardGetSchema_1 = __importDefault(require("./boardGetSchema"));
exports.boardGetSchema = boardGetSchema_1.default;
const boardPatchSchema_1 = __importDefault(require("./boardPatchSchema"));
exports.boardPatchSchema = boardPatchSchema_1.default;
const taskCreateSchema_1 = __importDefault(require("./taskCreateSchema"));
exports.taskCreateSchema = taskCreateSchema_1.default;
//# sourceMappingURL=index.js.map