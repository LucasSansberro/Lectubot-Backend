import { Request, Response } from "express";
import {
  getBooksReadService,
  getBookReadByIdService,
  postBookReadService,
  editBookReadByIdService,
  deleteBookReadByIdService,
  getBooksReadByUserOrBookIdService,
} from "../services/booksRead.service.js";
import { IBookRead } from "../models/Schemas/BookRead.js";
import { IUser } from "../models/Schemas/User.js";

export const getBooksReadController = async (req: Request, res: Response) => {
  try {
    const booksRead: IBookRead[] = await getBooksReadService();
    res.json({ success: true, data: [...booksRead], error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const getBookReadByIdController = async (req: Request, res: Response) => {
  try {
    const bookReadId: string = req.params.id;
    const bookReadFound: IBookRead = await getBookReadByIdService(bookReadId);

    res.json({ success: true, data: { ...bookReadFound }, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const getOwnBooksReadController = async (req: any, res: Response) => {
  console.log("Hola")
  try {
    const userId = req.user;
    const booksReadFound: IBookRead[] = await getBooksReadByUserOrBookIdService("user", userId);

    res.json({ success: true, data: [...booksReadFound], error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const getBooksReadByUserOrBookIdController = async (req: Request, res: Response) => {
  try {
    const type: string = req.params.type;
    const id: string = req.params.id;
    const booksReadFound: any = await getBooksReadByUserOrBookIdService(type, id);

    res.json({ success: true, data: [...booksReadFound], error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const postBookReadController = async (req: Request, res: Response) => {
  try {
    const newBookRead: IBookRead = req.body;
    const bookReadCreated: IBookRead = await postBookReadService(newBookRead);

    res.json({ success: true, data: { ...bookReadCreated }, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const editBookReadByIdController = async (req: Request, res: Response) => {
  try {
    const updatedBookRead: IBookRead = req.body;
    const bookReadId: string = req.params.id;
    const bookReadSuccessfullyUpdated: IBookRead = await editBookReadByIdService(bookReadId, updatedBookRead);

    res.json({ success: true, data: { ...bookReadSuccessfullyUpdated }, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const deleteBookReadByIdController = async (req: Request, res: Response) => {
  try {
    const bookReadId: string = req.params.id;
    const bookReadDeleted: string = await deleteBookReadByIdService(bookReadId);

    res.json({ success: true, data: bookReadDeleted, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};
