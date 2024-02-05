"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const taskCreateSchema = joi_1.default.object({
    title: joi_1.default.string().required().max(16).messages({
        "any.required": "Missing required title field",
        "string.max": "Title must be no more than 16 symbols",
        "string.base": "Title must be a string",
    }),
    description: joi_1.default.string().required().messages({
        "any.required": "Missing required Phone field",
    }),
    status: joi_1.default.string()
        .valid("todo", "in-progress", "done")
        .required()
        .messages({
        "any.required": "Missing required status field",
        "any.only": "Invalid status value",
    }),
    owner: joi_1.default.string().hex().required().messages({
        "any.required": "Missing required owner field",
        "string.hex": "Owner must be a hexadecimal string",
        "string.length": "Owner must be 24 characters long",
    }),
});
exports.default = taskCreateSchema;
//# sourceMappingURL=taskCreateSchema.js.map