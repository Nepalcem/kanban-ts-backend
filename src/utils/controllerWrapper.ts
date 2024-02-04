import { RequestHandler } from "express";

// type ControllerFunction = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => Promise<void>;

// const controlWrapper = (controller: ControllerFunction): RequestHandler => {
//   const func = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await controller(req, res, next);
//     } catch (error) {
//       next(error);
//     }
//   };

//   return func;
// };

const controlWrapper =
  (controller: RequestHandler): RequestHandler =>
  async (req, res, next) => {
    try {
      await controller(req, res, next);
    } catch (error) {
      next(error);
    }
  };

export default controlWrapper;