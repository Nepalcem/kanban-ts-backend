import { HttpError } from "@/utils";
import { Request, Response } from "express";
import { Board } from "@/models";

const createTask = async (req: Request, res: Response) => {
  const { hashedID } = req.params;
  const body = req.body;

  const board = await Board.findOne({ hashedID });
  if (!board) {
    throw new HttpError(404, "Board not found");
  }

  const existingTask = board.tasks.find((task) => task.title === body.title);
  if (existingTask) {
    throw new HttpError(409, "Task with such name already exists in the board");
  }

  board.tasks.push(body);
  await board.save();

  res.status(201).json({
    board,
    message: "Task was created!",
  });
};

export default createTask;
