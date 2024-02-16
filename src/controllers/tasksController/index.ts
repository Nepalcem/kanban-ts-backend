import { controlWrapper } from "utils";
import createNewTask from "./createNewTask";
import patchTask from "./patchTask";

export const ctrl = {
  createNewTask: controlWrapper(createNewTask),
  patchTask: controlWrapper(patchTask),
};
