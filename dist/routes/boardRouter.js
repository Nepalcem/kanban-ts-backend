"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const boardController_1 = require("../controllers/boardController"); //ctrl.createBoard
const middleWares_1 = require("../middleWares");
const boardRouter = express_1.default.Router();
boardRouter.post("/create", middleWares_1.validateBody, middleWares_1.validateBoardCreationFields, boardController_1.ctrl.createBoard);
boardRouter.get("/:hashedID", middleWares_1.validateBoardGetFields, boardController_1.ctrl.getBoard);
boardRouter.patch("/:hashedID", middleWares_1.validateBody, middleWares_1.validateBoardPatchFields, boardController_1.ctrl.patchBoard);
boardRouter.delete("/:hashedID", middleWares_1.validateBoardGetFields, boardController_1.ctrl.deleteBoard);
exports.default = boardRouter;
//# sourceMappingURL=boardRouter.js.map