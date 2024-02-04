import { ErrorRequestHandler } from "express";

const handleMongooseError: ErrorRequestHandler = (error, req, res, next) => {
  const { name, code } = error;

  const status = name === "MongoServerError" && code === 11000 ? 409 : 400;
  error.status = status;
  next();
};

export default handleMongooseError;
