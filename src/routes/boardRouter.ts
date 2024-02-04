import express, { Express, NextFunction, Request, Response } from "express";
import { ctrl } from "../controllers/boardController"; //ctrl.createBoard
import { validateBody, validateBoardCreationFields } from "middleWares";

const boardRouter = express.Router();

boardRouter.post(
  "/create",
  validateBody,
  validateBoardCreationFields,
  ctrl.createBoard
);

export default boardRouter;