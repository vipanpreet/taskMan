import express from "express";
import { Application, Request, Response, Express } from "express";
import passport from "passport";
import session from "express-session";

import "./config/passport";

import listEndpoints from "express-list-endpoints";
import connect from "./config/db";
import log from "./logger";
import routes from "./routes";

const app: Application = express();

// Middleware
app.use(express.json());
app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "doraemon",
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req: Request, res: Response) => {
  res.send("Yo App is Running");
});

const PORT: number = 5001;

app.listen(PORT, () => {
  log.info(`Server listing at ${PORT}`);

  // Routes
  app.use(routes);

  listEndpoints(<Express>app).map((aa) => {
    console.log(aa.path, aa.methods);
  });

  // DB Connection
  connect();
});
