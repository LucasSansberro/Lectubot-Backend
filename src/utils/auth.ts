import { Request, Response, NextFunction } from "express";

export const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/");
  }
};

export const isNotAuthorized = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    res.redirect("/");
  } else {
    next();
  }
};
