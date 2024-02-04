"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBoardPatchFields = exports.validateBoardGetFields = exports.validateBoardCreationFields = exports.validateBody = void 0;
const validateBody_1 = __importDefault(require("./validateBody"));
exports.validateBody = validateBody_1.default;
const validateBoardFields_1 = require("./validateBoardFields");
Object.defineProperty(exports, "validateBoardCreationFields", { enumerable: true, get: function () { return validateBoardFields_1.validateBoardCreationFields; } });
Object.defineProperty(exports, "validateBoardGetFields", { enumerable: true, get: function () { return validateBoardFields_1.validateBoardGetFields; } });
Object.defineProperty(exports, "validateBoardPatchFields", { enumerable: true, get: function () { return validateBoardFields_1.validateBoardPatchFields; } });
//# sourceMappingURL=index.js.map