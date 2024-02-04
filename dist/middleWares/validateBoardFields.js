"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBoardPatchFields = exports.validateBoardGetFields = exports.validateBoardCreationFields = void 0;
const joiSchemas_1 = require("../joiSchemas");
const utils_1 = require("../utils");
const validateBoardCreationFields = async (req, res, next) => {
    const request = req.body;
    const { error, value } = joiSchemas_1.boardCreateSchema.validate(request);
    if (error) {
        return next(new utils_1.HttpError(400, "Bad Request"));
        // res.status(400).json({ error: error.details[0].message });
    }
    else {
        req.body = value;
        next();
    }
};
exports.validateBoardCreationFields = validateBoardCreationFields;
const validateBoardGetFields = async (req, res, next) => {
    const request = req.body;
    const { error, value } = joiSchemas_1.boardGetSchema.validate(request);
    if (error) {
        return next(new utils_1.HttpError(400, "Bad Request or invalid ID"));
        // res.status(400).json({ error: error.details[0].message });
    }
    else {
        req.body = value;
        next();
    }
};
exports.validateBoardGetFields = validateBoardGetFields;
const validateBoardPatchFields = async (req, res, next) => {
    const request = req.body;
    const { error, value } = joiSchemas_1.boardPatchSchema.validate(request);
    if (error) {
        return next(new utils_1.HttpError(400, "Bad Request or invalid ID"));
        // res.status(400).json({ error: error.details[0].message });
    }
    else {
        req.body = value;
        next();
    }
};
exports.validateBoardPatchFields = validateBoardPatchFields;
//# sourceMappingURL=validateBoardFields.js.map