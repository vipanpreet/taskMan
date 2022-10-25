import { Request, Response } from "express";
import { addUser, addTeam } from "../service/team.service";
import log from "../logger";

// @ Desc - Add/Remove User To/From Team
// @ Access - PRIVATE <Admin>
// @ Source - req.user, req.query.id
export async function createTeamHandler(req: Request, res: Response) {
  try {
    const team = await addTeam(req.body);
    return res.json(team);
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}

// @ Desc - Create a Team
// @ Access - PRIVATE <Admin>
// @ Source -  req.body
export async function addUserHandler(req: Request, res: Response) {
  try {
    const user = await addUser(req.user, req.query);
    return res.json(user);
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}
