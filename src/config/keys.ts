const dotenv = require("dotenv");
dotenv.config();
export const app = {
  name: "Task Man",
  apiURL: process.env.BASE_API_URL,
  serverURL: process.env.BASE_SERVER_URL,
  clientURL: process.env.BASE_CLIENT_URL,
};

export const port = process.env.PORT || 5001;

export const database = {
  url: process.env.MONGO_URI,
};

export const jwtKeys = {
  secret: process.env.JWT_SECRET,
  tokenExp: "10d",
};
