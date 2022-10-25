import { Router } from "express";

import { addUserHandler, createTeamHandler } from "../controller/team.controller";
import auth from "../middleware/auth";
import role from "../middleware/role";

const teamRouter = Router();

teamRouter.route("/manage").post(auth, role.checkRole(role.ROLES.Admin), addUserHandler);
teamRouter.route("/add").post(auth, role.checkRole(role.ROLES.Admin), createTeamHandler);

export default teamRouter;
