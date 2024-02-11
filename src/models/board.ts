import { Schema, model } from "mongoose";
import { IBoard } from "appTypes/appTypes";

const boardSchema = new Schema<IBoard>(
  {
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
    tasks: [
      {
        type: Object,
        default: [],
      },
    ],
  },
  { versionKey: false, timestamps: false }
);


const Board = model<IBoard>("Board", boardSchema);



export default Board;
