import { Schema } from "mongoose";

export interface IBoard {
  title: string;
  hashedID: string;
}

export interface ITask {
  title: string;
  description: string;
  status: "todo" | "in-progress" | "done";
  owner: Schema.Types.ObjectId;
}