"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTaskCreationFields = void 0;
const joiSchemas_1 = require("../joiSchemas");
const utils_1 = require("../utils");
const validateTaskCreationFields = async (req, res, next) => {
    const request = req.body;
    const { error, value } = joiSchemas_1.taskCreateSchema.validate(request);
    if (error) {
        return next(new utils_1.HttpError(400, "Bad Request"));
        // res.status(400).json({ error: error.details[0].message });
    }
    else {
        req.body = value;
        next();
    }
};
exports.validateTaskCreationFields = validateTaskCreationFields;
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
//# sourceMappingURL=validateTaskFields.js.map