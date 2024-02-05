import { Board } from "@/models";
import { Request, Response, NextFunction } from "express";
import { HttpError } from "@/utils";

export const patchBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { hashedID } = req.params;
  const { title } = req.body;

  const board = await Board.findOneAndUpdate(
    { hashedID },
    { title },
    { returnDocument: "after" }
  );
  if (!board) {
    return next(new HttpError(404, "Board with such ID doesn't exist"));
  }

  res.status(200).json({
      board,
      message: "Board updated!"
  });
};
