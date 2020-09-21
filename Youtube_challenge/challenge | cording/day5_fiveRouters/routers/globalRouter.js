import express from "express";
import routes from "../src/routes";
import { home, join, login } from "../controllers/controllers";

const globalRouter = express.Router();

globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);

export default globalRouter;
