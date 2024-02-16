import { Request, Response, NextFunction } from "express";
import { Task } from "@/models";
import { HttpError } from "@/utils";

const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  const { _id } = req.params;

  const currentTask = await Task.findOne({ _id });
  if (!currentTask) {
    return next(new HttpError(404, "Task with such ID doesn't exist"));
  }

  const { owner } = currentTask;

  const boardTasks = await Task.find({ owner });
  if (!boardTasks || boardTasks.length === 0) {
    return next(new HttpError(404, "No tasks are matching this Board"));
  }

  //defining tasks to update within column
  const columnTasks = boardTasks.filter(
    (task) =>
      task.status === currentTask.status &&
      task.columnIndex > currentTask.columnIndex
  );

  const filter = {
    _id: { $in: columnTasks.map((task) => task._id) },
  };
  const update = {
    $inc: { columnIndex: -1 },
  };

  await Task.updateMany(filter, update);

  // Update the current task
  await Task.findOneAndDelete({ _id });

  res.status(200).json({
    message: "Task deleted!",
  });
};

export default deleteTask;
