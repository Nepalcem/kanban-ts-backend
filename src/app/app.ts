import express, { Express, NextFunction, Request, Response } from "express";
import logger from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(__dirname, "../environment", ".env") });
import AppError from "errorHandler/errorHandler";

//routers
import { boardRouter, taskRouter } from "../routes";

const app: Express = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

//routes
app.use("/boards", boardRouter);
app.use("/tasks", taskRouter);

app.use((_req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err: AppError, _req: Request, res: Response, _next: NextFunction): Promise<void> => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message: message });
  return Promise.resolve();
});

export default app;