"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Set name for contact"],
        maxlength: 24,
    },
    description: {
        type: String,
        required: [true, "Description is required"],
    },
    status: {
        type: String,
        enum: ["to do", "in-progress", "done"],
        required: [true, "Status is required"],
    },
    owner: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Board",
    },
    columnIndex: {
        type: Number,
        required: [true, "columnIndex is required"],
    },
}, { versionKey: false });
const Task = (0, mongoose_1.model)("Task", taskSchema);
exports.default = Task;
//# sourceMappingURL=task.js.map