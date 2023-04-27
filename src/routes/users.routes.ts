import Router from "express";
import { getUsuarioController } from "../controller/users.controller.js";
import User from "../models/User.js";

const usersRouter = Router();

usersRouter.get("/", getUsuarioController)

export default usersRouter;
