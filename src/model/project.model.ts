import mongoose, { ObjectId, Types } from "mongoose";

export interface ProjectDocument extends mongoose.Document {
  name: string;
  description: string;
  poster: string;
  status: string;
  priority: string;
  assigned: string[];
  team: Types.ObjectId;
  ongoingTasks: number;
  completedTasks: number;
  totalTasks: number;
  teamLead: Types.ObjectId;
}

const ProjectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    poster: {
      type: String,
    },
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
    assigned: [
      {
        type: Types.ObjectId,
        ref: "User",
      },
    ],
    team: {
      type: Types.ObjectId,
      ref: "Team",
    },
    // Files Field
    ongoingTasks: {
      type: Number,
      default: 0,
    },
    completedTasks: {
      type: Number,
      default: 0,
    },
    totalTasks: {
      type: Number,
      default: 0,
    },

    teamLead: {
      type: Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Project = mongoose.model<ProjectDocument>("Project", ProjectSchema);

export default Project;
