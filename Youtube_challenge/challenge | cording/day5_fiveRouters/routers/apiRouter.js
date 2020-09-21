import express from "express";
import routes from "../src/routes";
import { api } from "../controllers/controllers";
import { documentaion } from "../controllers/controllers";

const apiRouter = express.Router();

apiRouter.get("/", api);
apiRouter.get(routes.documentaion, documentaion);

export default apiRouter;
