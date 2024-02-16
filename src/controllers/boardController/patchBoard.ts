import { Request, Response, NextFunction } from "express";
import { Board } from "@/models";
import { HttpError } from "@/utils";

export const patchBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { hashedID } = req.params;
  const { title } = req.body;

  const existingBoard = await Board.findOne({ title });
  if (existingBoard) {
    return next(
      new HttpError(
        409,
        "Board with such title Already Exist, try a different one"
      )
    );
  }

  const board = await Board.findOneAndUpdate(
    { hashedID },
    { title },
    { returnDocument: "after" }
  ).select("-createdAt -updatedAt");
  if (!board) {
    return next(new HttpError(404, "Board with such ID doesn't exist"));
  }

  res.status(200).json({
    board,
    message: "Board updated!",
  });
};
