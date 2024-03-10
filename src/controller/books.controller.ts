import { Request, Response } from "express";
import {
  deleteBookByIdService,
  editBookByIdService,
  getBooksService,
  getBookByIdService,
  postBookService,
  getBooksByValueService,
} from "../services/books.service.js";
import { IBook } from "../models/Schemas/Book.js";

export const getBooksController = async (req: Request, res: Response) => {
  try {
    const books: IBook[] = await getBooksService();
    res.json({ success: true, data: [...books], error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const getBookByIdController = async (req: Request, res: Response) => {
  try {
    const bookId: string = req.params.id;
    const bookFound: IBook = await getBookByIdService(bookId);

    res.json({ success: true, data: { ...bookFound }, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const getBooksByValueController = async (req: Request, res: Response) => {
  try {
    const type: string = req.params.type;
    const id: string = req.params.id;
    const booksFound: IBook[] = await getBooksByValueService(type, id);
    res.json({ success: true, data: [...booksFound], error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const postBookController = async (req: Request, res: Response) => {
  try {
    const newBook: IBook = req.body;
    const bookCreated: IBook = await postBookService(newBook);

    res.json({ success: true, data: { ...bookCreated }, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const editBookByIdController = async (req: Request, res: Response) => {
  try {
    const updatedBook: IBook = req.body;
    const bookId: string = req.params.id;
    const bookSuccessfullyUpdated: IBook = await editBookByIdService(bookId, updatedBook);

    res.json({ success: true, data: { ...bookSuccessfullyUpdated }, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const deleteBookByIdController = async (req: Request, res: Response) => {
  try {
    const bookId: string = req.params.id;
    const bookDeleted: string = await deleteBookByIdService(bookId);

    res.json({ success: true, data: bookDeleted, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};
