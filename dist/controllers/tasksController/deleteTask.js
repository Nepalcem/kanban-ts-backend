"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const deleteTask = async (req, res, next) => {
    const { _id } = req.params;
    const currentTask = await models_1.Task.findOne({ _id });
    if (!currentTask) {
        return next(new utils_1.HttpError(404, "Task with such ID doesn't exist"));
    }
    const { owner } = currentTask;
    const boardTasks = await models_1.Task.find({ owner });
    if (!boardTasks || boardTasks.length === 0) {
        return next(new utils_1.HttpError(404, "No tasks are matching this Board"));
    }
    //defining tasks to update within column
    const columnTasks = boardTasks.filter((task) => task.status === currentTask.status &&
        task.columnIndex > currentTask.columnIndex);
    const filter = {
        _id: { $in: columnTasks.map((task) => task._id) },
    };
    const update = {
        $inc: { columnIndex: -1 },
    };
    await models_1.Task.updateMany(filter, update);
    // Update the current task
    await models_1.Task.findOneAndDelete({ _id });
    res.status(200).json({
        message: "Task deleted!",
    });
};
exports.default = deleteTask;
//# sourceMappingURL=deleteTask.js.map