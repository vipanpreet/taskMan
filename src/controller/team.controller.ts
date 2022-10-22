import { Request, Response } from "express";
import { addUser } from "../service/team.service";
import log from "../logger";

export async function addUserHandler(req: Request, res: Response) {
  try {
    const user = await addUser(req.user, req.query);
    return res.json(user);
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}
