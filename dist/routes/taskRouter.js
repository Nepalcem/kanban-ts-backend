"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tasksController_1 = require("../controllers/tasksController");
const middleWares_1 = require("../middleWares");
const validateTaskFields_1 = require("../middleWares/validateTaskFields");
const taskRouter = express_1.default.Router();
taskRouter.post("/create", middleWares_1.validateBody, validateTaskFields_1.validateTaskCreationFields, tasksController_1.ctrl.createTask);
taskRouter.patch("/:_id", middleWares_1.validateBody, validateTaskFields_1.validateTaskPatchFields, tasksController_1.ctrl.patchTask);
taskRouter.delete("/:_id", tasksController_1.ctrl.deleteTask);
exports.default = taskRouter;
//# sourceMappingURL=taskRouter.js.map