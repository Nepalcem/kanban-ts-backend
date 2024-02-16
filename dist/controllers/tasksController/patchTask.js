"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const utils_1 = require("../../utils");
const patchTask = async (req, res, next) => {
    const { _id } = req.params;
    const { title, description, status, columnIndex, owner } = req.body;
    const boardTasks = await models_1.Task.find({ owner });
    if (!boardTasks || boardTasks.length === 0) {
        return next(new utils_1.HttpError(404, "No tasks are matching this Board"));
    }
    //  const currentTask = await Task.findOne({ _id });
    const currentTask = boardTasks.find(task => task._id.toString() === _id);
    if (!currentTask) {
        return next(new utils_1.HttpError(404, "Task with such ID doesn't exist"));
    }
    const updatedTask = {
        title,
        description,
        status,
        columnIndex,
    };
    //updating without moving
    if (updatedTask.status === currentTask.status &&
        updatedTask.columnIndex === currentTask.columnIndex) {
        await models_1.Task.findByIdAndUpdate({ _id }, updatedTask);
        res.status(200).json({
            task: {
                ...updatedTask,
                _id,
                owner,
            },
            message: "Task updated!",
        });
        return;
    }
    //moving within a single column
    const columnTasks = boardTasks.filter((task) => task.status === updatedTask.status);
    if (updatedTask.status === currentTask.status) {
        // Moving from high index to lower in a single column
        if (updatedTask.columnIndex < currentTask.columnIndex) {
            const columnTasksToUpdate = columnTasks.filter((task) => task.columnIndex < currentTask.columnIndex &&
                task.columnIndex >= updatedTask.columnIndex &&
                task._id.toString() !== _id);
            const filter = {
                _id: { $in: columnTasksToUpdate.map((task) => task._id) },
            };
            const update = {
                $inc: { columnIndex: 1 },
            };
            await models_1.Task.updateMany(filter, update);
            // Moving from low index to higher in a single column
        }
        else if (updatedTask.columnIndex > currentTask.columnIndex) {
            const columnTasksToUpdate = columnTasks.filter((task) => task.columnIndex > currentTask.columnIndex &&
                task.columnIndex <= updatedTask.columnIndex &&
                task._id.toString() !== _id);
            const filter = {
                _id: { $in: columnTasksToUpdate.map((task) => task._id) },
            };
            const update = {
                $inc: { columnIndex: -1 },
            };
            await models_1.Task.updateMany(filter, update);
        }
        //
    }
    //Moving Between columns
    if (updatedTask.status !== currentTask.status) {
        //tasks in current column change higher then current task
        const currentColumnTasks = boardTasks.filter((task) => task.status === currentTask.status &&
            task.columnIndex > currentTask.columnIndex);
        const currentColumnTasksFilter = {
            _id: { $in: currentColumnTasks.map((task) => task._id) },
        };
        const currentColumnTasksUpdate = {
            $inc: { columnIndex: -1 },
        };
        await models_1.Task.updateMany(currentColumnTasksFilter, currentColumnTasksUpdate);
        //Tasks in updated column change
        const updatedColumnTasks = boardTasks.filter((task) => task.status === updatedTask.status &&
            task.columnIndex >= updatedTask.columnIndex);
        //Tasks in updated column higher than updated Task
        const updatedHigherColumnTasksFilter = {
            _id: { $in: updatedColumnTasks.map((task) => task._id) },
        };
        const updatedHigherColumnTasksValue = {
            $inc: { columnIndex: 1 },
        };
        await models_1.Task.updateMany(updatedHigherColumnTasksFilter, updatedHigherColumnTasksValue);
    }
    // Update the current task
    await models_1.Task.findByIdAndUpdate({ _id }, updatedTask);
    // Fetch and return the updated board tasks
    const updatedBoardTasks = await models_1.Task.find({ owner });
    res.status(200).json({
        tasks: updatedBoardTasks,
        message: "Task updated!",
    });
};
exports.default = patchTask;
//# sourceMappingURL=patchTask.js.map