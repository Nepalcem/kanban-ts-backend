"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const taskPatchSchema_1 = __importDefault(require("./taskPatchSchema"));
const boardPatchSchema = joi_1.default.object({
    hashedID: joi_1.default.string().required().messages({
        "string.base": "HashedID must be a string",
    }),
    title: joi_1.default.string().max(16).messages({
        "string.max": "Title must be no more than 16 symbols",
        "string.base": "Title must be a string",
    }),
    tasks: joi_1.default.array().items(taskPatchSchema_1.default),
});
exports.default = boardPatchSchema;
//# sourceMappingURL=boardPatchSchema.js.map