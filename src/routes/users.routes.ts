import Router from "express";
import User from "../models/User.js";

const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  let user;
  try {
    user = await User.findOne({ _id: req.user });
  } catch (e) {
    user = e;
  }
  res.json({ user });
});

export default usersRouter;
