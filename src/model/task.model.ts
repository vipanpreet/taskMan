import mongoose, { ObjectId, Types } from "mongoose";

export interface TaskDocument extends mongoose.Document {
  name: string;
  description: string;
  poster: string;
  status: string;
  priority: string;
  assigned: string[];
  team: Types.ObjectId;
  estimateEndDate: Date;
  actualEndDate: Date;
  // ongoingSubTasks: number;
  // completedSubTasks: number;
  // totalSubTasks: number;
  subTasks: {
    name: string;
    isCompleted: boolean;
    estimateEndDate: Date;
    actualEndDate: Date;
    completedBy: Types.ObjectId;
  };
}

const SubTaskSchema = new mongoose.Schema({
  name: String,
  isCompleted: {
    type: Boolean,
    default: false,
  },
  estimateEndDate: {
    type: Date,
    default: Date.now(),
  },
  actualEndDate: {
    type: Date,
    default: Date.now(),
  },
  completedBy: {
    type: Types.ObjectId,
    ref: "User",
  },
});

const TaskSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    subTasks: [SubTaskSchema],
    status: {
      type: String,
      enum: ["not started", "in progress", "completed", "cancelled"],
      default: "not started",
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high", "critical"],
      default: "low",
    },
    estimateEndDate: {
      type: Date,
      default: Date.now(),
    },
    actualEndDate: {
      type: Date,
      default: Date.now(),
    },
    assigned: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
    // assigned - manually OR same as project
    project: {
      type: Types.ObjectId,
      ref: "Project",
    },
    team: {
      type: Types.ObjectId,
      ref: "Team",
    },
    // Files Field
  },
  { timestamps: true }
);

const Task = mongoose.model<TaskDocument>("Task", TaskSchema);

export default Task;
