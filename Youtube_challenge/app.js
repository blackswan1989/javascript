// const express = require("express"); 구문법
import express from "express"; //ES6문법 express를 불러온다(require로).
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

//#2.7 middleware 미설치
app.set("view engine", "pug"); // pug middleware set

app.use(helmet());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter); // use는 user에 접속하면 use router전체를
app.use(routes.videos, videoRouter);

export default app; // 내 파일을 import(불러올때)할 때 app object를 준다는 의미
