"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const boardGetSchema = joi_1.default.object({
    hashedID: joi_1.default.string().required().messages({
        "string.base": "HashedID must be a string",
    }),
});
exports.default = boardGetSchema;
//# sourceMappingURL=boardGetSchema.js.map