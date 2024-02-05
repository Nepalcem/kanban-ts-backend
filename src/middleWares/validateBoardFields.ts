import { Request, Response, NextFunction } from "express";
import { boardCreateSchema, boardGetSchema, boardPatchSchema } from "joiSchemas";
import { HttpError } from "utils";

export const validateBoardCreationFields = async (req: Request, res: Response, next: NextFunction) => {
  const request = req.body;
  const { error, value } = boardCreateSchema.validate(request);
  if (error) {
    return next(new HttpError(400, "Bad Request"));
    // res.status(400).json({ error: error.details[0].message });
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

  const { error, value } = boardGetSchema.validate({hashedID});

    if (error) {
        return next(new HttpError(400, "Bad Request or invalid ID"));
    // res.status(400).json({ error: error.details[0].message });
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
  const request = req.body;
  const { error, value } = boardPatchSchema.validate(request);
  if (error) {
    return next(new HttpError(400, "Bad Request or invalid ID"));
    // res.status(400).json({ error: error.details[0].message });
  } else {
    req.body = value;
    next();
  }
};