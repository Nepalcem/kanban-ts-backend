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
    // res.status(400).json({ error: error.details[0].message });
  } else {
    req.body = value;
    next();
  }
};

// export const validateTaskPatchFields = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const request = req.body;
//   const { error, value } = taskPatchSchema.validate(request);
//   if (error) {
//     return next(new HttpError(400, "Bad Request"));
//     // res.status(400).json({ error: error.details[0].message });
//   } else {
//     req.body = value;
//     next();
//   }
// };