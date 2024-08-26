import Router from "express";
import {
  deleteBookByIdController,
  editBookByIdController,
  getBooksController,
  getBookByIdController,
  postBookController,
  getBooksByValueController
} from "../controller/books.controller.js";
import { isAuthorized } from "../utils/auth.js";
const booksRouter = Router();

booksRouter.get("/", getBooksController);
booksRouter.get("/:id", getBookByIdController);
booksRouter.get("/:type/:id", getBooksByValueController);
booksRouter.post("/", isAuthorized, postBookController);
booksRouter.put("/:id", isAuthorized, editBookByIdController);
booksRouter.delete("/:id", isAuthorized, deleteBookByIdController);

export default booksRouter;
