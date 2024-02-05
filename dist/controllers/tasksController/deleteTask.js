"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = void 0;
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const deleteTask = async (req, res, next) => {
    const { _id } = req.params;
    const task = await models_1.Task.deleteOne({ _id });
    if (task.deletedCount === 0) {
        return next(new utils_1.HttpError(404, "Task with such ID doesn't exist"));
    }
    res.status(200).json({
        message: "Task Deleted!",
    });
};
exports.deleteTask = deleteTask;
//# sourceMappingURL=deleteTask.js.map