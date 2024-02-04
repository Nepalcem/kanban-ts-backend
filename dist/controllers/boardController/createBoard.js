"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBoard = void 0;
const utils_1 = require("../../utils");
const models_1 = require("../../models");
const createBoard = async (req, res) => {
    const { title } = req.body;
    const board = await models_1.Board.findOne({ title });
    if (board) {
        throw new utils_1.HttpError(409, "Board with such name already exist");
    }
    // const hashedID = await bcrypt.hash(title, 1);
    const hashedID = (0, utils_1.hashTitle)(title);
    await models_1.Board.create({
        title,
        hashedID,
    });
    res.status(201).json({
        board: {
            title,
            hashedID,
        },
        message: "Board was created!",
    });
};
exports.createBoard = createBoard;
//# sourceMappingURL=createBoard.js.map