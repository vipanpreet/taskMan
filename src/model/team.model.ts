import mongoose, { ObjectId, Types } from "mongoose";

export interface TeamDocument extends mongoose.Document {
  name: string;
  ongoingTasks: number;
  teamLead: Types.ObjectId;
}

const TeamSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ongoingTasks: {
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

const Team = mongoose.model<TeamDocument>("Team", TeamSchema);

export default Team;
