"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBoard = void 0;
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const getBoard = async (req, res, next) => {
    const { hashedID } = req.params;
    const board = await models_1.Board.findOne({ hashedID: hashedID }).select("-createdAt -updatedAt");
    if (!board) {
        return next(new utils_1.HttpError(404, "Board with such ID doesn't exist"));
    }
    res.status(200).json({
        board
    });
};
exports.getBoard = getBoard;
//# sourceMappingURL=getBoard.js.map