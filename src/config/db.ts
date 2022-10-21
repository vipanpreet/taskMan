import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import log from "../logger";

const connect = () => {
  const uri = process.env.MONGO_URI as string;

  return mongoose
    .connect(uri)
    .then(() => {
      log.info("Database connected");
    })
    .catch((error) => {
      log.error("db error", error);
      process.exit(1);
    });
};

export default connect;
