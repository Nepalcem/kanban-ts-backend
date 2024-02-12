"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const taskPatchSchema = joi_1.default.object({
    title: joi_1.default.string().required().max(32).messages({
        "any.required": "Missing required title field",
        "string.max": "Title must be no more than 16 symbols",
        "string.base": "Title must be a string",
    }),
    description: joi_1.default.string().required().messages({
        "any.required": "Missing required Phone field",
    }),
    status: joi_1.default.string()
        .valid("to do", "in-progress", "done")
        .required()
        .messages({
        "any.required": "Missing required status field",
        "any.only": "Invalid status value",
    }),
    columnIndex: joi_1.default.number().required().messages({
        "any.required": "Missing required columnIndex field",
        "number.base": "Column index must be a number",
    }),
});
exports.default = taskPatchSchema;
//# sourceMappingURL=taskPatchSchema.js.map