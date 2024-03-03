import { Request, Response } from "express";
import { IBookRead } from "../models/Schemas/BookRead.js";
import {
  deleteBookReadByIdService,
  editBookReadByIdService,
  getBookReadByIdService,
  getBooksReadByUserOrBookIdService,
  getBooksReadService,
  postBookReadService,
} from "../services/booksRead.service.js";
import { BookReadStatus } from "../models/Enum/BookReadStatus.js";

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

export const getBooksReadByUserOrBookIdController = async (req: Request, res: Response) => {
  try {
    const type: string = req.params.type;
    const id: string | Express.User = req.params.id != null ? req.params.id : req.user!;
    const statusQueryParam = req.query.readStatus as string | undefined;
    const status: BookReadStatus | undefined = statusQueryParam ? (BookReadStatus as any)[statusQueryParam] : undefined;

    const booksReadFound: any = await getBooksReadByUserOrBookIdService(type, id, status);

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
