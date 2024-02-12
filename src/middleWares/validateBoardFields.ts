import { Request, Response, NextFunction } from "express";
import {
  boardCreateSchema,
  boardGetSchema,
  boardPatchSchema,
} from "joiSchemas";
import { HttpError } from "utils";

export const validateBoardCreationFields = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const request = req.body;
  const { error, value } = boardCreateSchema.validate(request);
  if (error) {
    return next(new HttpError(400, "Bad Request"));
  } else {
    req.body = value;
    next();
  }
};

export const validateBoardGetFields = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { hashedID } = req.params;

  const { error, value } = boardGetSchema.validate({ hashedID });

  if (error) {
    return next(new HttpError(400, "Bad Request or invalid ID"));

  } else {
    req.params = value;
    next();
  }
};

export const validateBoardPatchFields = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { hashedID } = req.params;
  const request = req.body;
  const data = { hashedID, ...request };

  const { error, value } = boardPatchSchema.validate(data);
  if (error) {
    console.log(error.message)
    return next(new HttpError(400, "Bad Request or invalid ID"));

  } else {
    req.body = value;
    next();
  }
};
