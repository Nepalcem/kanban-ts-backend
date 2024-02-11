"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctrl = void 0;
const createBoard_1 = require("./createBoard");
const utils_1 = require("../../utils");
const getBoard_1 = require("./getBoard");
const patchBoard_1 = require("./patchBoard");
const deleteBoard_1 = require("./deleteBoard");
const createTask_1 = __importDefault(require("../tasksController/createTask"));
exports.ctrl = {
    createBoard: (0, utils_1.controlWrapper)(createBoard_1.createBoard),
    getBoard: (0, utils_1.controlWrapper)(getBoard_1.getBoard),
    patchBoard: (0, utils_1.controlWrapper)(patchBoard_1.patchBoard),
    deleteBoard: (0, utils_1.controlWrapper)(deleteBoard_1.deleteBoard),
    createTask: (0, utils_1.controlWrapper)(createTask_1.default),
};
//# sourceMappingURL=index.js.map