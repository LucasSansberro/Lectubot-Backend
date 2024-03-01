import { Request, Response } from "express";
import { IUser } from "../models/Schemas/User.js";
import { getUserByIdService, getUsersService } from "../services/users.service.js";

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const users: IUser[] = await getUsersService();
    res.json({ success: true, data: [...users], error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const getOwnUserController = async (req: any, res: Response) => {
  try {
    const userId: IUser = req.user;
    const ownUser: IUser = await getUserByIdService(userId!);
    res.json({ success: true, data: { ...ownUser }, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};
