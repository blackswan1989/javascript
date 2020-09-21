import express from "express";
import routes from "../src/routes";
import { confirmAccount } from "../controllers/controllers";

const userRouter = express.Router();

userRouter.get("/", confirmAccount);

export default userRouter;
