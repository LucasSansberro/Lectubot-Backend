import Router from "express";
import passport from "passport";
import { isNotAuthorized } from "../utils/auth.js";
import ENV from "../config.js";
const authRouter = Router();
const { FRONTENDURL } = ENV;

authRouter.get("/", isNotAuthorized, passport.authenticate("discord"));

authRouter.get(
  "/redirect",
  passport.authenticate("discord", {
    successRedirect: "post-auth",
    failureRedirect: "/",
  })
);

authRouter.get("/post-auth", (req, res) => {
  res.cookie("logged", "true", { maxAge: 60000 * 60 * 24 * 7, httpOnly: false });
  res.redirect(FRONTENDURL);
});

authRouter.get("/logout", (req, res, next) => {
  req.session.destroy((err) => {
    if (err) {
      return next(err);
    }
    res.clearCookie("logged");
    res.clearCookie("connect.sid");
    res.redirect("/");
  });
});

export default authRouter;
