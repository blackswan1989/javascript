import express from "express";
import routes from "../routes";
import {
  userDetail,
  users,
  editProfile,
  changePassword,
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get("/", users);
// userRouter.get("/", users); "http://localhost:4000/users" 주소를 만드려면 이렇게.
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

export default userRouter;
