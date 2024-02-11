// import { Schema, model } from "mongoose";
// import { ITask } from "@/appTypes/appTypes";


// const taskSchema = new Schema<ITask>(
//   {
//     title: {
//       type: String,
//       required: [true, "Set name for contact"],
//       maxlength: 16,
//     },
//     description: {
//       type: String,
//       required: [true, "Description is required"],
//     },
//     status: {
//       type: String,
//       enum: ["to do", "in progress", "done"],
//       required: [true, "Status is required"],
//     },
//     columnIndex: {
//       type: Number,
//     },
//   },
//   { versionKey: false }
// );

// const Task = model<ITask>("Task", taskSchema);

// export default Task;
