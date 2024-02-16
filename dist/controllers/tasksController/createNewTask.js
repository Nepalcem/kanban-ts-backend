"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const models_1 = require("../../models");
const models_2 = require("../../models");
const createNewTask = async (req, res) => {
    const body = req.body;
    const { title, owner } = req.body;
    const task = await models_1.Task.findOne({ title });
    if (task) {
        throw new utils_1.HttpError(409, "Task with such name already exist");
    }
    const board = await models_2.Board.findOne({ owner });
    if (!board) {
        throw new utils_1.HttpError(404, "Board not found");
    }
    const result = await models_1.Task.create({ ...body });
    res.status(201).json({
        result,
        message: "Task was created!",
    });
};
exports.default = createNewTask;
//# sourceMappingURL=createNewTask.js.map