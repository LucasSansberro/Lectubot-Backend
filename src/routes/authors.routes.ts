import { Router } from "express";
import {
  getAllAuthorsController,
  getAuthorByIdController,
  postAuthorController,
  editAuthorByIdController,
  deleteAuthorByIdController,
} from "../controller/authors.controller";
import { isAuthorized } from "../utils/auth";

const authorsRouter = Router();

authorsRouter.get("/", getAllAuthorsController);
authorsRouter.get("/:id", isAuthorized, getAuthorByIdController);
authorsRouter.post("/", isAuthorized, postAuthorController);
authorsRouter.put("/:id", isAuthorized, editAuthorByIdController);
authorsRouter.delete("/:id", isAuthorized, deleteAuthorByIdController);

export default authorsRouter;
