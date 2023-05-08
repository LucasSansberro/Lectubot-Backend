import { Request, Response } from "express";
import {
  getAllBooksReadService,
  getBookReadByIdService,
  postBookReadService,
  editBookReadByIdService,
  deleteBookReadByIdService,
} from "../services/booksRead.service.js";

export const getAllBooksReadController = async (req: Request, res: Response) => {
  try {
    const allBooksRead = await getAllBooksReadService();
    res.json({ allBooksRead });
  } catch (e) {
    res.json(e);
  }
};

export const getBookReadByIdController = async (req: Request, res: Response) => {
  try {
    const bookReadId = req.params.id;
    const bookReadFound = await getBookReadByIdService(bookReadId);

    res.json({ bookReadFound });
  } catch (e) {
    res.json(e);
  }
};

export const postBookReadController = async (req: Request, res: Response) => {
  try {
    const newBookRead = req.body;
    const bookReadCreated = await postBookReadService(newBookRead);

    res.json({ bookReadCreated });
  } catch (e) {
    res.json(e);
  }
};

export const editBookReadByIdController = async (req: Request, res: Response) => {
  try {
    const updatedBookRead = req.body;
    const bookReadId = req.params.id;
    const bookReadSuccessfullyUpdated = await editBookReadByIdService(bookReadId, updatedBookRead);

    res.json({ bookReadSuccessfullyUpdated });
  } catch (e) {
    res.json(e);
  }
};

export const deleteBookReadByIdController = async (req: Request, res: Response) => {
  try {
    const bookReadId = req.params.id;
    const bookReadDeleted = deleteBookReadByIdService(bookReadId);

    res.json({ bookReadDeleted });
  } catch (e) {
    res.json(e);
  }
};
