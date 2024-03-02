import { Router } from "express";
import {
  getBooksReadController,
  getBooksReadByUserOrBookIdController,
  getBookReadByIdController,
  postBookReadController,
  editBookReadByIdController,
  deleteBookReadByIdController,
  getOwnBooksReadController,
} from "../controller/booksRead.controller.js";
import { isAuthorized } from "../utils/auth.js";

const booksReadRouter = Router();

booksReadRouter.get("/", isAuthorized, getBooksReadController);
booksReadRouter.get("/:id", isAuthorized, getBookReadByIdController);
booksReadRouter.get("/:type/:id", isAuthorized, getBooksReadByUserOrBookIdController);
booksReadRouter.get("/ownbooksread", isAuthorized, getOwnBooksReadController);
booksReadRouter.post("/", isAuthorized, postBookReadController);
booksReadRouter.put("/:id", isAuthorized, editBookReadByIdController);
booksReadRouter.delete("/:id", isAuthorized, deleteBookReadByIdController);

export default booksReadRouter;
