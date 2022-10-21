import { Router } from "express";

import { createUserHandler } from "../controller/user.controller";
const userRouter = Router();

userRouter.post("/register", createUserHandler);

export default userRouter;
