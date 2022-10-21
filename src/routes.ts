import { Router } from "express";
import userRouter from "./routes/user.router";

userRouter;
const routes = Router();

routes.use("/api/users", userRouter);

export default routes;
