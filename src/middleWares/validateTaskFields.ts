import { Request, Response, NextFunction } from "express";
import { taskCreateSchema } from "@/joiSchemas";
import { HttpError } from "@/utils";


const validateTaskFields = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description, status, columnIndex } = req.body;
  const { error } = taskCreateSchema.validate({
    title,
    description,
    status,
    columnIndex,
  });
  if (error) {
    return next(new HttpError(400, error.message));
  } else {
    next();
  }
};

export default validateTaskFields;