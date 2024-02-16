"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const boardSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        maxlength: 16,
        unique: true,
    },
    hashedID: {
        type: String,
        required: [true, "hashedID is required"],
    },
}, { versionKey: false, timestamps: false });
const Board = (0, mongoose_1.model)("Board", boardSchema);
exports.default = Board;
//# sourceMappingURL=board.js.map