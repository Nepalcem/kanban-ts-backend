import bcrypt from "bcrypt";
import { HttpError } from "@/utils";
import { Board } from "@/models";
import { Request, Response } from "express";

export const createBoard = async (req: Request, res: Response) => {
  const { title } = req.body;

  const board = await Board.findOne({ title });
  if (board) {
    throw new HttpError(409, "Board with such name already exist");
  }

  const hashedID = await bcrypt.hash(title, 1);

  await Board.create({
    title,
    hashedID,
  });

  res.status(201).json({
    board: {
      title,
      hashedID,
    },
    message: "Board was created!",
  });
};