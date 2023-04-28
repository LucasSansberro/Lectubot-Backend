import { Request, Response } from "express";
import { getAllBooksService, getBookByIdService } from "../services/books.service.js";

export const getAllBooksController = async (req: Request, res: Response) => {
  try {
    const allBooks = await getAllBooksService();
    res.json({ allBooks });
  } catch (error) {
    res.json(error);
  }
};

export const getBookByIdController = async (req: Request, res: Response) => {
  try {
    const bookId = req.params.id
    const bookFound = await getBookByIdService(bookId);

    res.json({ bookFound });
  } catch (error) {
    res.json({ error });
  }
};