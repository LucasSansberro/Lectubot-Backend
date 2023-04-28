import Router from "express";
import { getAllUsersController, getOwnUserController} from "../controller/users.controller.js";

const usersRouter = Router();

usersRouter.get("/", getAllUsersController)
usersRouter.get("/me", getOwnUserController)

export default usersRouter;
