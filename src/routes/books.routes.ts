import Router from "express";
import { isAuthorized } from "../utils/auth.js";
const booksRouter = Router();

booksRouter.get("/", isAuthorized, (req, res) => {
  res.json({ msg: "Dashboard" });
});

export default booksRouter;
