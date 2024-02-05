import { controlWrapper } from "utils";
import { createTask } from "./createTask";
import { patchTask } from "./patchTask";

export const ctrl = {
  createTask: controlWrapper(createTask),
  patchTask: controlWrapper(patchTask),
};