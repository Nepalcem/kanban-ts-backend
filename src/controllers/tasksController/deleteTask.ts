import { Task } from "@/models";
import { Request, Response, NextFunction } from "express";
import { HttpError } from "@/utils";

export const deleteTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { _id } = req.params;

  const task = await Task.deleteOne({_id});

  if (task.deletedCount === 0) {
    return next(new HttpError(404, "Task with such ID doesn't exist"));
  }

  res.status(200).json({
    message: "Task Deleted!",
  });
};
