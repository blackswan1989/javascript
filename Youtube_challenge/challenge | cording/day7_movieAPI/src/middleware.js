import routes from "./movieRouter";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Namad Movies";
  res.locals.routes = routes;
  next();
};
