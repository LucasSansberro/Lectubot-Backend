import Router from "express";
import { getAllBooksController, getBookByIdController } from "../controller/books.controller.js";
import { isAuthorized } from "../utils/auth.js";
const booksRouter = Router();

booksRouter.get("/", isAuthorized, getAllBooksController);
booksRouter.get("/:id", isAuthorized, getBookByIdController);

export default booksRouter;
