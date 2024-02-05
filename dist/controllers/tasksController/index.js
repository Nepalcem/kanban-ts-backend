"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctrl = void 0;
const utils_1 = require("../../utils");
const createTask_1 = require("./createTask");
const patchTask_1 = require("./patchTask");
const deleteTask_1 = require("./deleteTask");
exports.ctrl = {
    createTask: (0, utils_1.controlWrapper)(createTask_1.createTask),
    patchTask: (0, utils_1.controlWrapper)(patchTask_1.patchTask),
    deleteTask: (0, utils_1.controlWrapper)(deleteTask_1.deleteTask),
};
//# sourceMappingURL=index.js.map