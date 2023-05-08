import Router from "express";
import {
  deleteBookByIdController,
  editBookByIdController,
  getAllBooksController,
  getBookByIdController,
  postBookController,
} from "../controller/books.controller.js";
import { isAuthorized } from "../utils/auth.js";
const booksRouter = Router();

booksRouter.get("/", getAllBooksController);
booksRouter.get("/:id", isAuthorized, getBookByIdController);
booksRouter.post("/", isAuthorized, postBookController);
booksRouter.put("/:id", isAuthorized, editBookByIdController);
booksRouter.delete("/:id", isAuthorized, deleteBookByIdController);

export default booksRouter;
