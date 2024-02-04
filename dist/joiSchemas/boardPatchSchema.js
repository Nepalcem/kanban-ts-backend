"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const boardPatchSchema = joi_1.default.object({
    title: joi_1.default.string().required().max(16).messages({
        "any.required": "Missing required title field",
        "string.max": "Title must be no more than 16 symbols",
        "string.base": "Title must be a string",
    }),
    hashedID: joi_1.default.string().required().messages({
        "string.base": "Token must be a string",
    }),
});
exports.default = boardPatchSchema;
//# sourceMappingURL=boardPatchSchema.js.map