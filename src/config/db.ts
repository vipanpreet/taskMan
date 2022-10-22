import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import log from "../logger";
import { database } from "./keys";

const connect = () => {
  const uri = database.url as string;

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
