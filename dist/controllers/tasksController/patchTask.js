"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchTask = void 0;
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const patchTask = async (req, res, next) => {
    const { _id } = req.params;
    const body = req.body;
    const updatedTask = await models_1.Task.findByIdAndUpdate(_id, body, {
        new: true,
    });
    if (!updatedTask) {
        return next(new utils_1.HttpError(404, "Task with such ID doesn't exist"));
    }
    res.status(200).json({
        updatedTask,
        message: "Task updated!",
    });
};
exports.patchTask = patchTask;
//# sourceMappingURL=patchTask.js.map