import express from "express";
import { ctrl } from "../controllers/boardController"; //ctrl.createBoard
import {
  validateBody,
  validateBoardCreationFields,
  validateBoardGetFields,
  validateBoardPatchFields,
} from "middleWares";
import { validateTaskCreationFields } from "@/middleWares/validateTaskFields";


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
  validateTaskCreationFields,
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
