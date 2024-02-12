import { HttpError, hashTitle } from "@/utils";
import { Board } from "@/models";
import { Request, Response } from "express";



export const createBoard = async (req: Request, res: Response) => {
  const { title } = req.body;

  const board = await Board.findOne({ title });
  if (board) {
    throw new HttpError(409, "Board with such name already exist");
  }

  // const hashedID = await bcrypt.hash(title, 1);
   const hashedID = hashTitle(title);

  const createdBoard = await Board.create({
    title,
    hashedID,
    tasks: [],
  });
  
  res.status(201).json({
    board: {
      title,
      hashedID,
      tasks: [],
      id: createdBoard._id,
    },
    message: "Board was created!",
  });
};