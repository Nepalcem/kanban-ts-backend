"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBoard = void 0;
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const deleteBoard = async (req, res, next) => {
    const { hashedID } = req.params;
    const board = await models_1.Board.findOne({ hashedID });
    if (!board) {
        return next(new utils_1.HttpError(404, "Board with such ID doesn't exist"));
    }
    await models_1.Board.findOneAndDelete({ hashedID });
    res.status(200).json({
        message: "Board Deleted!",
    });
};
exports.deleteBoard = deleteBoard;
//# sourceMappingURL=deleteBoard.js.map