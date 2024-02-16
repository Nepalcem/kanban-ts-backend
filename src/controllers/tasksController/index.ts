import { controlWrapper } from "utils";
import createNewTask from "./createNewTask";
import patchTask from "./patchTask";
import deleteTask from "./deleteTask";


export const ctrl = {
  createNewTask: controlWrapper(createNewTask),
  patchTask: controlWrapper(patchTask),
  deleteTask: controlWrapper(deleteTask),
};
