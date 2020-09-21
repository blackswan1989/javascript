import express from "express";
import routes from "../src/routes";
import { courses } from "../controllers/controllers";
import { coursesNew, coursesMine } from "../controllers/controllers";

const courseRouter = express.Router();

courseRouter.get("/", courses);
courseRouter.get(routes.coursesNew, coursesNew);
courseRouter.get(routes.coursesMine, coursesMine);

export default courseRouter;
