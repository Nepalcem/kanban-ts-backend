import { HttpError } from "@/utils";
import { Request, Response } from "express";
import { Task } from "@/models";

export const createTask = async (req: Request, res: Response) => {
  const body = req.body;
  const { title } = req.body;

  const task = await Task.findOne({ title });
  if (task) {
    throw new HttpError(409, "Task with such name already exist");
  }

  const result = await Task.create({ ...body });

  res.status(201).json({
    result,
    message: "Task was created!",
  });
};
