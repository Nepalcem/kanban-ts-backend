import express from "express";
import { ctrl } from "@/controllers/tasksController";
import { validateBody } from "@/middleWares";
import { validateTaskFields, validateTaskOwner } from "@/middleWares";

const taskRouter = express.Router();

taskRouter.post("/", validateBody,validateTaskOwner, validateTaskFields, ctrl.createNewTask);
taskRouter.patch(
  "/:_id",
  validateBody,
  validateTaskOwner,
  validateTaskFields,
  ctrl.patchTask
);
// taskRouter.delete("/:_id", ctrl.deleteTask);

export default taskRouter;
