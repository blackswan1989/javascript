import express from "express";
import path from "path";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
const app = express();

const PORT = 4000;

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Add your magic here!
app.use(localsMiddleware);

app.use(routes.home, userRouter);

export default app;

// Codesanbox does not need PORT :)
// app.listen(() => console.log(`Listening!`));

const handleListening = () => {
  console.log(`Listening on: 🌐http://localhost:${PORT}🌐`);
};
app.listen(PORT, handleListening);
