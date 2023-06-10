import { Request, Response } from "express";
import { IUser } from "../models/Schemas/User.js";
import { APIResponse } from "../models/APIResponse.js";
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
    const response: APIResponse<IUser> = { success: true, data: { ...ownUser }, error: null };
    res.json({ ...response });
  } catch (error: any) {
    const response: APIResponse<IUser> = { success: false, data: null, error: { ...error } };
    res.json({ response });
  }
};
