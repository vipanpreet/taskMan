import express from "express";
import { Application, Request, Response, Express } from "express";
import listEndpoints from "express-list-endpoints";
import connect from "./config/db";
import log from "./logger";
import routes from "./routes";

const app: Application = express();

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
