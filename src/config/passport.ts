import { UserDocument } from "../model/user.model";

import passport from "passport";

import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";

import { jwtKeys } from "./keys";

import User from "../model/user.model";
const secret = jwtKeys.secret;

const opts = { jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), secretOrKey: secret };

passport.use(
  new Strategy(<any>opts, (payload: any, done: any) => {
    User.findById(payload?.id)
      .then((user: any) => {
        if (user) {
          return done(null, user);
        }

        return done(null, false);
      })
      .catch((err: Error) => {
        return done(err, false);
      });
  })
);

passport.serializeUser((user: any, done: any) => {
  return done(null, user.id);
});

passport.deserializeUser((id: any, done: any) => {
  return User.findById(id, (err: Error, user: UserDocument) => done(err, user));
});
