import Router from "express";
import User from "../models/User.js";

const indexRouter = Router();

indexRouter.get("/", async (req, res) => {
  const test = await User.findOne({ _id: req.user });
  res.json({ test });
});

export default indexRouter;
