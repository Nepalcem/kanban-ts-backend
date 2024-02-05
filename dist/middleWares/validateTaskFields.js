"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTaskPatchFields = exports.validateTaskCreationFields = void 0;
const joiSchemas_1 = require("../joiSchemas");
const utils_1 = require("../utils");
const validateTaskCreationFields = async (req, res, next) => {
    const request = req.body;
    const { error, value } = joiSchemas_1.taskCreateSchema.validate(request);
    if (error) {
        return next(new utils_1.HttpError(400, "Bad Request"));
        // res.status(400).json({ error: error.details[0].message });
    }
    else {
        req.body = value;
        next();
    }
};
exports.validateTaskCreationFields = validateTaskCreationFields;
const validateTaskPatchFields = async (req, res, next) => {
    const request = req.body;
    const { error, value } = joiSchemas_1.taskPatchSchema.validate(request);
    if (error) {
        return next(new utils_1.HttpError(400, "Bad Request"));
        // res.status(400).json({ error: error.details[0].message });
    }
    else {
        req.body = value;
        next();
    }
};
exports.validateTaskPatchFields = validateTaskPatchFields;
//# sourceMappingURL=validateTaskFields.js.map