"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const controlWrapper = (controller) => async (req, res, next) => {
    try {
        await controller(req, res, next);
    }
    catch (error) {
        next(error);
    }
};
exports.default = controlWrapper;
//# sourceMappingURL=controllerWrapper.js.map