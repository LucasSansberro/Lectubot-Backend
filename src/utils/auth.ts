import { Request, Response, NextFunction } from "express";

export const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    next();
  } else {
    throw "You need to login to accesss this section"
  }
};

export const isNotAuthorized = (req: Request, res: Response, next: NextFunction) => {
  if (req.user) {
    throw "You have already logged in"
  } else {
    next();
  }
};
