"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joiSchemas_1 = require("../joiSchemas");
const utils_1 = require("../utils");
const validateTaskFields = async (req, res, next) => {
    const { title, description, status, columnIndex } = req.body;
    const { error } = joiSchemas_1.taskCreateSchema.validate({
        title,
        description,
        status,
        columnIndex,
    });
    if (error) {
        return next(new utils_1.HttpError(400, error.message));
    }
    else {
        next();
    }
};
exports.default = validateTaskFields;
//# sourceMappingURL=validateTaskFields.js.map