import { Request, Response, NextFunction } from "express";
import { HttpError } from "utils";

const validateBody = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const request = req.body;
  if (Object.keys(request).length === 0) {
      return next(new HttpError(400, "Missing fields"));
    // return res.status(400).json({ message: "missing fields" });
  }
  next();
};

export default validateBody;
