import Router from "express";
import passport from "passport";
import { isNotAuthorized } from "../utils/auth.js";

const authRouter = Router();

authRouter.get("/", isNotAuthorized, passport.authenticate("discord"));

authRouter.get(
  "/redirect",
  passport.authenticate("discord", {
    successRedirect: "/dashboard",
    failureRedirect: "/",
  })
);

authRouter.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/")
});

export default authRouter;
