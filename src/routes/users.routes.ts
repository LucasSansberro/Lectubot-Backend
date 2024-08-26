import Router from "express";
import { getUsersController, getOwnUserController} from "../controller/users.controller.js";
import { isAuthorized } from "../utils/auth.js";

const usersRouter = Router();

usersRouter.get("/",isAuthorized, getUsersController)
usersRouter.get("/me", getOwnUserController)

export default usersRouter;
