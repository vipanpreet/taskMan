import { Router } from "express";
import userRouter from "./routes/user.router";
import teamRouter from "./routes/team.router";

userRouter;
const routes = Router();

routes.use("/api/users", userRouter);
routes.use("/api/teams", teamRouter);

export default routes;
