"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TaskOwnerSchema_1 = __importDefault(require("../joiSchemas/TaskOwnerSchema"));
const utils_1 = require("../utils");
const validateTaskOwner = async (req, res, next) => {
    const { owner } = req.body;
    const { error } = TaskOwnerSchema_1.default.validate({ owner });
    if (error) {
        return next(new utils_1.HttpError(400, error.message));
    }
    else {
        next();
    }
};
exports.default = validateTaskOwner;
//# sourceMappingURL=validateTaskOwner.js.map