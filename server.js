import express, { static } from "express";
import { join } from "path";

const app = express();

app.use(static(`${__dirname}/dist/rating-people`));

app.get("/*", (req, res) =>
  res.sendFile(join(`${__dirname}/dist/rating-people/index.html`))
);

app.listen(process.env.PORT || 8080);
