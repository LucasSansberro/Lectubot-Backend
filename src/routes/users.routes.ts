import Router from "express";
import { getAllUsersController, getOwnUserController} from "../controller/users.controller.js";
import { isAuthorized } from "../utils/auth.js";

const usersRouter = Router();

usersRouter.get("/",isAuthorized, getAllUsersController)
usersRouter.get("/me",isAuthorized, getOwnUserController)

export default usersRouter;
