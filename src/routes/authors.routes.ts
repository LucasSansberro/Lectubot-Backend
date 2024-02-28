import { Router } from "express";
import {
  getAllAuthorsNameAndIdController,
  getAuthorByIdController,
  postAuthorController,
  editAuthorByIdController,
  deleteAuthorByIdController,
} from "../controller/authors.controller.js";
import { isAuthorized } from "../utils/auth.js";

const authorsRouter = Router();

authorsRouter.get("/", getAllAuthorsNameAndIdController);
authorsRouter.get("/:id", isAuthorized, getAuthorByIdController);
authorsRouter.post("/", isAuthorized, postAuthorController);
authorsRouter.put("/:id", isAuthorized, editAuthorByIdController);
authorsRouter.delete("/:id", isAuthorized, deleteAuthorByIdController);

export default authorsRouter;
