import { Request, Response } from "express";
import { IBookRead } from "../models/Schemas/BookRead.js";
import {
  deleteBookReadByIdService,
  editBookReadByIdService,
  getBookReadByIdService,
  getBooksReadByValueService,
  getBooksReadService,
  postBookReadService,
} from "../services/booksRead.service.js";
import { BookReadStatus } from "../models/Enum/BookReadStatus.js";
import { postReviewService } from "../services/reviews.service.js";
import { getBookByIdService } from "../services/books.service.js";
import { IBook } from "../models/Schemas/Book.js";

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

export const getBooksReadByValueController = async (req: Request, res: Response) => {
  try {
    const type: string = req.params.type;
    const id: string | Express.User = req.params.id == "ownUser" ? req.user! : req.params.id;
    const status = req.query.readStatus as string | undefined;
    const booksReadFound: IBookRead[] = await getBooksReadByValueService(type, id, status);
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

export const endBookReadingController = async (req: Request, res: Response) => {
  try {
    const status = req.query.readStatus as string | undefined;
    const updatedBookRead: IBookRead = req.body;
    const bookId: string = req.body.book_id;
    const bookReadId: string = req.params.id;

    if (status == BookReadStatus.reading) {
      const toUpdateBook: IBook = await getBookByIdService(bookId);
      toUpdateBook.stars?.push(updatedBookRead.stars!);
      if (updatedBookRead.review) {
        await postReviewService(updatedBookRead.review!);
        toUpdateBook.reviews?.push(updatedBookRead.review!);
      }
    }
    const bookReadSuccessfullyUpdated: IBookRead = await editBookReadByIdService(bookReadId, updatedBookRead);
    res.json({ success: true, data: { ...bookReadSuccessfullyUpdated }, error: null });
  } catch (error) {}
};
