"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctrl = void 0;
const utils_1 = require("../../utils");
const createNewTask_1 = __importDefault(require("./createNewTask"));
const patchTask_1 = __importDefault(require("./patchTask"));
const deleteTask_1 = __importDefault(require("./deleteTask"));
exports.ctrl = {
    createNewTask: (0, utils_1.controlWrapper)(createNewTask_1.default),
    patchTask: (0, utils_1.controlWrapper)(patchTask_1.default),
    deleteTask: (0, utils_1.controlWrapper)(deleteTask_1.default),
};
//# sourceMappingURL=index.js.map