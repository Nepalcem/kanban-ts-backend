import { taskCreateSchema } from "@/joiSchemas";
import { Request, Response, NextFunction } from "express";
import { HttpError } from "@/utils";


export const validateTaskCreationFields = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const request = req.body;
  const { error, value } = taskCreateSchema.validate(request);
  if (error) {
    return next(new HttpError(400, "Bad Request"));
  } else {
    req.body = value;
    next();
  }
};
