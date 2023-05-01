import { Request, Response } from "express";
import {
  deleteBookByIdService,
  editBookByIdService,
  getAllBooksService,
  getBookByIdService,
  postBookService,
} from "../services/books.service.js";

export const getAllBooksController = async (req: Request, res: Response) => {
  try {
    const allBooks = await getAllBooksService();
    res.json({ allBooks });
  } catch (e) {
    res.json(e);
  }
};

export const getBookByIdController = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const bookFound = await getBookByIdService(bookId);

    res.json({ bookFound });
  } catch (e) {
    res.json(e);
  }
};

export const postBookController = async (req: Request, res: Response) => {
  try {
    const newBook = req.body;
    const bookCreated = await postBookService(newBook);

    res.json({ bookCreated });
  } catch (e) {
    res.json(e);
  }
};

export const editBookByIdController = async (req: Request, res: Response) => {
  try {
    const updatedBook = req.body;
    const bookId = req.params.id;
    const bookSuccessfullyUpdated = await editBookByIdService(bookId, updatedBook);

    res.json({ bookSuccessfullyUpdated });
  } catch (e) {
    res.json(e);
  }
};

export const deleteBookByIdController = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id;
    const bookDeleted = deleteBookByIdService(bookId);

    res.json({ bookDeleted });
  } catch (e) {
    res.json(e);
  }
};
