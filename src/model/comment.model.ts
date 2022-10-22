import mongoose, { ObjectId, Types } from "mongoose";

export interface CommentDocument extends mongoose.Document {
  title: string;
  description: string;
  user: Types.ObjectId;
  model: Types.ObjectId;
  onModel: string;
}

const CommentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    user: {
      type: Types.ObjectId,
      ref: "User",
    },
    model: { type: Types.ObjectId, refPath: "onModel" },
    onModel: {
      type: String,
      enum: ["Project", "Task"],
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model<CommentDocument>("Comment", CommentSchema);

export default Comment;
