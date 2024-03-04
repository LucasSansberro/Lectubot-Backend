import { Router } from "express";
import {
  deleteBookReadByIdController,
  editBookReadByIdController,
  getBookReadByIdController,
  getBooksReadByValueController,
  getBooksReadController,
  postBookReadController,
} from "../controller/booksRead.controller.js";
import { isAuthorized } from "../utils/auth.js";

const booksReadRouter = Router();

booksReadRouter.get("/", isAuthorized, getBooksReadController);
booksReadRouter.get("/:id", isAuthorized, getBookReadByIdController);
booksReadRouter.get("/:type/:id", isAuthorized, getBooksReadByValueController);
booksReadRouter.post("/", isAuthorized, postBookReadController);
booksReadRouter.put("/:id", isAuthorized, editBookReadByIdController);
booksReadRouter.delete("/:id", isAuthorized, deleteBookReadByIdController);

export default booksReadRouter;
