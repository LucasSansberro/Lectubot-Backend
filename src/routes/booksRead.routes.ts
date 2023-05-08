import { Router } from "express";
import {
  getAllBooksReadController,
  getBookReadByIdController,
  postBookReadController,
  editBookReadByIdController,
  deleteBookReadByIdController,
} from "../controller/booksRead.controller";
import { isAuthorized } from "../utils/auth";

const booksReadRouter = Router();

booksReadRouter.get("/", getAllBooksReadController);
booksReadRouter.get("/:id", isAuthorized, getBookReadByIdController);
booksReadRouter.post("/", isAuthorized, postBookReadController);
booksReadRouter.put("/:id", isAuthorized, editBookReadByIdController);
booksReadRouter.delete("/:id", isAuthorized, deleteBookReadByIdController);

export default booksReadRouter;
