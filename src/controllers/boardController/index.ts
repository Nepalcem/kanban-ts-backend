import { createBoard } from "./createBoard";
import { controlWrapper } from "utils";

export const ctrl = {
  createBoard: controlWrapper(createBoard),
};