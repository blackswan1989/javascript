import express from "express";
import routes from "../routes";
import { home } from "../controllers/controllers";
import { login, photos, profile } from "../controllers/controllers";

const userRouter = express.Router();

userRouter.get(routes.home, home);
userRouter.get(routes.login, login);
userRouter.get(routes.photos, photos);
userRouter.get(routes.profile, profile);

export default userRouter;
