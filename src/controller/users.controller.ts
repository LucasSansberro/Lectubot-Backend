import { Request, Response, NextFunction } from "express";
import { getUsuarioService } from "../services/users.service.js";

export const getUsuarioController = async (req: Request, res: Response) => {
  try {
    const user = req.user;
    const userFound = await getUsuarioService(user!);

    res.json({ userFound });
  } catch (error) {
    res.json({ error });
  }
};
