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
    }
    else {
        req.body = value;
        next();
    }
};
exports.validateBoardCreationFields = validateBoardCreationFields;
const validateBoardGetFields = async (req, res, next) => {
    const { hashedID } = req.params;
    const { error, value } = joiSchemas_1.boardGetSchema.validate({ hashedID });
    if (error) {
        return next(new utils_1.HttpError(400, "Bad Request or invalid ID"));
    }
    else {
        req.params = value;
        next();
    }
};
exports.validateBoardGetFields = validateBoardGetFields;
const validateBoardPatchFields = async (req, res, next) => {
    const { hashedID } = req.params;
    const request = req.body;
    const data = { hashedID, ...request };
    const { error, value } = joiSchemas_1.boardPatchSchema.validate(data);
    if (error) {
        return next(new utils_1.HttpError(400, "Bad Request or invalid ID"));
    }
    else {
        req.body = value;
        next();
    }
};
exports.validateBoardPatchFields = validateBoardPatchFields;
//# sourceMappingURL=validateBoardFields.js.map