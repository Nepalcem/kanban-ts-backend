const errorMessageList: Record<number, string>= {
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  409: "Conflict",
};


class HttpError extends Error {
  status: number;

  constructor(
    status: number = 400,
    message: string = errorMessageList[status]
  ) {
    super(message);
    this.name = "HttpError";
    this.status = status;

    // Object.setPrototypeOf(this, HttpError.prototype);
  }
}

export default HttpError;