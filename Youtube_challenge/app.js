// const express = require("express"); 구문법
import express from "express"; //ES6문법 express를 불러온다(require로).
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
const app = express();

//#2.7 middleware 미설치

app.use("/user", userRouter); // use는 user에 접속하면 use router전체를 쓰겠다는 의미.

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app; // 내 파일을 import(불러올때)할 때 app object를 준다는 의미
