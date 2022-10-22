import mongoose, { ObjectId, Types } from "mongoose";

export interface ActivityDocument extends mongoose.Document {
  activityType: string;
  activityField: string;
  user: Types.ObjectId;
}

const ActivitySchema = new mongoose.Schema(
  {
    activityType: {
      type: String,
      enum: ["completed", "created", "added", "removed", "changed"],
    },
    activityField: {
      type: String,
      enum: ["user", "task", "subtask", "priority", "status", "team"],
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Activity = mongoose.model<ActivityDocument>("Activity", ActivitySchema);

export default Activity;
