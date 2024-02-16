import { Request, Response, NextFunction } from "express";
import validateOwner from "@/joiSchemas/TaskOwnerSchema";
import { HttpError } from "@/utils";

const validateTaskOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const {owner} = req.body;
  const { error } = validateOwner.validate({ owner });
  if (error) {
    return next(new HttpError(400, error.message));
  } else {
    next();
  }
};

export default validateTaskOwner;
