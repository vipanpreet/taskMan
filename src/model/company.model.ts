import mongoose, { ObjectId, Types } from "mongoose";

export interface CompanyDocument extends mongoose.Document {
  name: string;
  ongoingTasks: number;
  teamLead: Types.ObjectId;
}

const CompanySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    subscriptionNextCycle: {
      type: Date,
    },
    companyLead: {
      type: Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

const Company = mongoose.model<CompanyDocument>("Company", CompanySchema);

export default Company;
