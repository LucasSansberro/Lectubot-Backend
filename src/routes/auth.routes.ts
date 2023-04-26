import Router from "express";
import passport from "passport";
import { isNotAuthorized } from "../utils/auth.js";

const authRouter = Router();

authRouter.get("/", isNotAuthorized, passport.authenticate("discord"));

authRouter.get(
  "/redirect",
  passport.authenticate("discord", {
    successRedirect: "http://localhost:4200",
    failureRedirect: "/",
  })
);

authRouter.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  res.redirect("/http://localhost:4200");
});

export default authRouter;
function next(err: any): void {
  throw new Error("Function not implemented.");
}

