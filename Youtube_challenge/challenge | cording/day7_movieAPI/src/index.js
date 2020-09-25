import express from "express";
import path from "path";
import "./db";
import movieRouter from "./movieRouter";
import { localsMiddleware } from "./middleware";

const app = express();
app.use(localsMiddleware);

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use("/", movieRouter);

// Codesanbox does not need PORT :)
app.listen(() => console.log(`✅  Server Ready!`));

//vscode port connect
const PORT = 3000;

const handleListening = () => {
  console.log(`Listening on: 🌐http://localhost:${PORT}🌐`);
};

app.listen(PORT, handleListening);
