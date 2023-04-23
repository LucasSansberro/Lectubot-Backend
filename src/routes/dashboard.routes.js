import Router from "express"
import { isAuthorized } from "../utils/auth.js";
const dashboardRouter = Router()

dashboardRouter.get("/", isAuthorized ,(req, res) => {
  res.json({ msg: "Dashboard" });
});

export default dashboardRouter