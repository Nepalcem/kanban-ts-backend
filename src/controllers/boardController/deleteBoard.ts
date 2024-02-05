import { Board } from "@/models";
import { Request, Response, NextFunction } from "express";
import { HttpError } from "@/utils";

export const deleteBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { hashedID } = req.params;

  const board = await Board.deleteOne({ hashedID });
  console.log(board);
  if (board.deletedCount === 0) {
    return next(new HttpError(404, "Board with such ID doesn't exist"));
  }

  res.status(200).json({
    message: "Board Deleted!",
  });
};
