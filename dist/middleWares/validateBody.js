"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const validateBody = async (req, res, next) => {
    const request = req.body;
    if (Object.keys(request).length === 0) {
        return next(new utils_1.HttpError(400, "Missing fields"));
        // return res.status(400).json({ message: "missing fields" });
    }
    next();
};
exports.default = validateBody;
//# sourceMappingURL=validateBody.js.map