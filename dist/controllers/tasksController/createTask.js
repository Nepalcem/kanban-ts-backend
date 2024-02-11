"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const models_1 = require("../../models");
const createTask = async (req, res) => {
    const { hashedID } = req.params;
    const body = req.body;
    const board = await models_1.Board.findOne({ hashedID });
    if (!board) {
        throw new utils_1.HttpError(404, "Board not found");
    }
    const existingTask = board.tasks.find((task) => task.title === body.title);
    if (existingTask) {
        throw new utils_1.HttpError(409, "Task with such name already exists in the board");
    }
    board.tasks.push(body);
    await board.save();
    res.status(201).json({
        board,
        message: "Task was created!",
    });
};
exports.default = createTask;
//# sourceMappingURL=createTask.js.map