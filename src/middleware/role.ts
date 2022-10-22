import { NextFunction, Request, Response } from "express";

const ROLES = {
  Admin: "admin",
  Employee: "employee",
  Manager: "manager",
};

const checkRole =
  (...roles: string[]) =>
  (req: Request, res: Response, next: NextFunction) => {
    const user: any = req.user;

    if (!user) {
      return res.status(401).send("your are Unauthorized");
    }

    const hasRole = roles.find((role) => user?.role === role);
    if (!hasRole) {
      return res.status(403).send("You are not allowed to do this.");
    }

    return next();
  };

const roles = { ROLES, checkRole };

export default roles;
