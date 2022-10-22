import { Router } from "express";

import {
  createUserHandler,
  loginUserHandler,
  testUserHandler,
} from "../controller/user.controller";
import auth from "../middleware/auth";
const userRouter = Router();

userRouter.post("/register", createUserHandler);
userRouter.post("/login", loginUserHandler);

// Test Route
userRouter.get("/test", auth, testUserHandler);

export default userRouter;
