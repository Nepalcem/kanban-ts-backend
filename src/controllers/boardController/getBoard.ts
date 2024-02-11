import { Board } from "@/models";
import { Request, Response, NextFunction } from "express";
import { HttpError } from "@/utils";

export const getBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { hashedID } = req.params;

  const board = await Board.findOne({ hashedID: hashedID }).select(
    "-createdAt -updatedAt"
  );
  if (!board) {
    return next(new HttpError(404, "Board with such ID doesn't exist"));
  }

  res.status(200).json({
    board
  });
};
