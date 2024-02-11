// import express from "express";
// import { ctrl } from "@/controllers/tasksController";
// import { validateBody } from "@/middleWares";
// import { validateTaskCreationFields, validateTaskPatchFields } from "@/middleWares/validateTaskFields";

// const taskRouter = express.Router();

// taskRouter.post("/", validateBody, validateTaskCreationFields, ctrl.createTask);
// taskRouter.patch(
//   "/:_id",
//   validateBody,
//   validateTaskPatchFields,
//   ctrl.patchTask
// );
// taskRouter.delete(
//   "/:_id",
//   ctrl.deleteTask
// );

// export default taskRouter;