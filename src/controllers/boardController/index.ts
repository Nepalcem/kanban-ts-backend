import { createBoard } from "./createBoard";
import { controlWrapper } from "utils";
import { getBoard } from "./getBoard";
import { patchBoard } from "./patchBoard";
import { deleteBoard } from "./deleteBoard";
import createTask from "../tasksController/createTask";

export const ctrl = {
  createBoard: controlWrapper(createBoard),
  getBoard: controlWrapper(getBoard),
  patchBoard: controlWrapper(patchBoard),
  deleteBoard: controlWrapper(deleteBoard),
  createTask: controlWrapper(createTask),
};
