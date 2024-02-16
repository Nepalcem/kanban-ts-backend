"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchBoard = void 0;
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const patchBoard = async (req, res, next) => {
    const { hashedID } = req.params;
    const { title } = req.body;
    const existingBoard = await models_1.Board.findOne({ title });
    if (existingBoard) {
        return next(new utils_1.HttpError(409, "Board with such title Already Exist, try a different one"));
    }
    const board = await models_1.Board.findOneAndUpdate({ hashedID }, { title }, { returnDocument: "after" }).select("-createdAt -updatedAt");
    if (!board) {
        return next(new utils_1.HttpError(404, "Board with such ID doesn't exist"));
    }
    res.status(200).json({
        board,
        message: "Board updated!",
    });
};
exports.patchBoard = patchBoard;
//# sourceMappingURL=patchBoard.js.map