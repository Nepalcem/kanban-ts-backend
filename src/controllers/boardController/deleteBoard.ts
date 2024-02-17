import { Request, Response, NextFunction } from "express";
import { Board, Task} from "@/models";
import { HttpError } from "@/utils";

export const deleteBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { hashedID } = req.params;

  const board = await Board.findOne({ hashedID });
    if (!board) {
    return next(new HttpError(404, "Board with such ID doesn't exist"));
  }
  const owner = board._id;
  await Board.findOneAndDelete({ hashedID });
  await Task.deleteMany({ owner });

  res.status(200).json({
    message: "Board Deleted!",
  });
};
