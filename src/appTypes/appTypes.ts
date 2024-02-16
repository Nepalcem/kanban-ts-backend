import { Schema } from "mongoose";

export interface IBoard {
  title: string;
  hashedID: string;
  tasks: ITask[];
}

export interface ITask {
  title: string;
  description: string;
  status: "to do" | "in progress" | "done";
  columnIndex: number;
  owner: Schema.Types.ObjectId;
}
