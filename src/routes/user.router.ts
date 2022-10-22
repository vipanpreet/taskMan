import { Router } from "express";

import {
  createUserHandler,
  loginUserHandler,
  testUserHandler,
} from "../controller/user.controller";
import auth from "../middleware/auth";
import role from "../middleware/role";
const userRouter = Router();

userRouter.post("/register", createUserHandler);
userRouter.post("/login", loginUserHandler);

// Test Route
userRouter.route("/test").get(auth, role.checkRole(role.ROLES.Admin), testUserHandler);

export default userRouter;
