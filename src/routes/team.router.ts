import { Router } from "express";

import { addUserHandler } from "../controller/team.controller";
import auth from "../middleware/auth";
import role from "../middleware/role";
const teamRouter = Router();

teamRouter.route("/test").get(auth, addUserHandler);

export default teamRouter;
