"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMessageList = {
    400: "Bad Request",
    401: "Unauthorized",
    403: "Forbidden",
    404: "Not Found",
    409: "Conflict",
};
class HttpError extends Error {
    constructor(status = 400, message = errorMessageList[status]) {
        super(message);
        this.name = "HttpError";
        this.status = status;
        // Object.setPrototypeOf(this, HttpError.prototype);
    }
}
exports.default = HttpError;
//# sourceMappingURL=HttpError.js.map