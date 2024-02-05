"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = void 0;
const utils_1 = require("../../utils");
const models_1 = require("../../models");
const createTask = async (req, res) => {
    const body = req.body;
    const { title } = req.body;
    const task = await models_1.Task.findOne({ title });
    if (task) {
        throw new utils_1.HttpError(409, "Task with such name already exist");
    }
    const result = await models_1.Task.create({ ...body });
    res.status(201).json({
        result,
        message: "Task was created!",
    });
};
exports.createTask = createTask;
//# sourceMappingURL=createTask.js.map