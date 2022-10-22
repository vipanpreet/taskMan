import mongoose, { ObjectId, Types } from "mongoose";

export interface UserDocument extends mongoose.Document {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  token: string;
  role: string;
  team: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    isActivated: {
      type: Boolean,
      default: false,
    },
    token: {
      type: String,
    },
    role: {
      type: String,
      default: "employee",
      enum: ["admin", "employee", "manager"],
      index: true,
    },
    team: {
      type: Types.ObjectId,
      ref: "Team",
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

const User = mongoose.model<UserDocument>("User", UserSchema);

export default User;
