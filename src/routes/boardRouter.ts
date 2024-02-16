import express from "express";
import { ctrl } from "../controllers/boardController"; //ctrl.createBoard
import {
  validateBody,
  validateBoardCreationFields,
  validateBoardGetFields,
  validateBoardPatchFields,
} from "middleWares";
import { validateTaskFields } from "middleWares";


const boardRouter = express.Router();

boardRouter.post(
  "/",
  validateBody,
  validateBoardCreationFields,
  ctrl.createBoard
);
boardRouter.post(
  "/tasks/:hashedID",
  validateBody,
  validateTaskFields,
  ctrl.createTask
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
