import { Request, Response } from "express";
import { createUser, loginSession } from "../service/user.service";
import log from "../logger";

export async function createUserHandler(req: Request, res: Response) {
  try {
    const user = await createUser(req.body);
    return res.json(user);
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}

export async function loginUserHandler(req: Request, res: Response) {
  try {
    const token = await loginSession(req.body);
    return res.json(token);
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}

export async function testUserHandler(req: Request, res: Response) {
  try {
    return res.json({ msg: "Route is Working" });
  } catch (e: any) {
    log.error(e);
    return res.status(409).send(e.message);
  }
}
