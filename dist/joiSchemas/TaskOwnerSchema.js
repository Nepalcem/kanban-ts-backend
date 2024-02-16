"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
const validateOwner = joi_1.default.object({
    owner: joi_1.default.string().hex().required().messages({
        "any.required": "Missing required owner field",
        "string.hex": "Owner must be a hexadecimal string",
        "string.length": "Owner must be 24 characters long",
    }),
});
exports.default = validateOwner;
//# sourceMappingURL=TaskOwnerSchema.js.map