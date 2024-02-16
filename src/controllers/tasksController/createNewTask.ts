import { HttpError } from "@/utils";
import { Request, Response } from "express";
import { Task } from "@/models";
import { Board } from "@/models";

const createNewTask = async (req: Request, res: Response) => {
  const body = req.body;
  const { title, owner } = req.body;

  const task = await Task.findOne({ title });
  if (task) {
    throw new HttpError(409, "Task with such name already exist");
  }
  const board = await Board.findOne({ owner });

  if (!board) {
    throw new HttpError(404, "Board not found");
  }

  const result = await Task.create({ ...body });

  res.status(201).json({
    result,
    message: "Task was created!",
  });
};

export default createNewTask;
