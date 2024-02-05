import { Task } from "@/models";
import { Request, Response, NextFunction } from "express";
import { HttpError } from "@/utils";

export const patchTask = async (req: Request, res: Response, next: NextFunction) => {
    const { _id } = req.params;
    const body = req.body;

  const updatedTask = await Task.findByIdAndUpdate(_id, body, {
    new: true,
  });
  if (!updatedTask) {
    return next(new HttpError(404, "Task with such ID doesn't exist"));
  }

  res.status(200).json({
    updatedTask,
    message: "Task updated!",
  });
};
