import express from "express";
import { ctrl } from "../controllers/boardController"; //ctrl.createBoard
import {
  validateBody,
  validateBoardCreationFields,
  validateBoardGetFields,
  validateBoardPatchFields,
} from "middleWares";

const boardRouter = express.Router();

boardRouter.post(
  "/create",
  validateBody,
  validateBoardCreationFields,
  ctrl.createBoard
);
boardRouter.get("/:hashedID", validateBoardGetFields, ctrl.getBoard);
boardRouter.patch(
  "/:hashedID",
  validateBody,
  validateBoardPatchFields,
  ctrl.patchBoard
);
boardRouter.delete("/:hashedID", validateBoardGetFields, ctrl.deleteBoard);

export default boardRouter;
