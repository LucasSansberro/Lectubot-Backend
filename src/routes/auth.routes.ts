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
    successRedirect: FRONTENDURL,
    failureRedirect: "/",
  })
);

authRouter.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  res.redirect(FRONTENDURL);
});

export default authRouter;
function next(err: any): void {
  throw new Error("Function not implemented.");
}

