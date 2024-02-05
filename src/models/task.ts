import { Schema, model } from "mongoose";
import { ITask } from "@/appTypes/appTypes";

const taskSchema = new Schema<ITask>(
  {
    title: {
      type: String,
      required: [true, "Set name for contact"],
      maxlength: 16,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    status: {
      type: String,
      enum: ["todo", "in-progress", "solved"],
      required: [true, "Status is required"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "Board",
      required: true,
    },
  },
  { versionKey: false }
);

const Task = model<ITask>("Task", taskSchema);

export default Task;
