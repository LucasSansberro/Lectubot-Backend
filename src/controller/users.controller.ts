import { Request, Response, NextFunction } from "express";
import { getAllUsersService, getUserByIdService } from "../services/users.service.js";

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const allUsers = await getAllUsersService();
    res.json({ allUsers });
  } catch (error) {
    res.json(error);
  }
};

export const getOwnUserController = async (req: Request, res: Response) => {
  try {
    const userId = req.user;
    const ownUser = await getUserByIdService(userId!);

    res.json({ ownUser });
  } catch (error) {
    res.json({ error });
  }
};
