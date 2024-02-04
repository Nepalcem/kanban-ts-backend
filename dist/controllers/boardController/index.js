"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ctrl = void 0;
const createBoard_1 = require("./createBoard");
const utils_1 = require("../../utils");
exports.ctrl = {
    createBoard: (0, utils_1.controlWrapper)(createBoard_1.createBoard),
};
//# sourceMappingURL=index.js.map