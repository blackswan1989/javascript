//codesandbox.io/s/express-blueprint-forked-yxeb7?file=/routers/courseRouter.js

https: import express from "express";
import globalRouter from "../routers/globalRouter";
import userRouter from "../routers/userRouter";
import courseRouter from "../routers/courseRouter";
import apiRouter from "../routers/apiRouter";
import apiVersionRouter from "../routers/apiVersionRouter";
import routes from "./routes";
const app = express();

app.use(routes.home, globalRouter);
app.use(routes.confirmAccount, userRouter);
app.use(routes.courses, courseRouter);
app.use(routes.api, apiRouter);
app.use(routes.api, apiVersionRouter);

export default app;
// Codesanbox does not need PORT :) //
app.listen(() => console.log(`Listening!`));
