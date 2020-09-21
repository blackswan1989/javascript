import express from "express";
import routes from "../src/routes";
import { api } from "../controllers/controllers";
import { v1, v2 } from "../controllers/controllers";
import { buy, refund, remove, edit } from "../controllers/controllers";

const apiVersionRouter = express.Router();

apiVersionRouter.get(routes.api, api);
apiVersionRouter.get(routes.v1, v1);
apiVersionRouter.get(routes.buy, buy);
apiVersionRouter.get(routes.refund, refund);
apiVersionRouter.get(routes.v2, v2);
apiVersionRouter.get(routes.remove, remove);
apiVersionRouter.get(routes.edit, edit);

export default apiVersionRouter;
