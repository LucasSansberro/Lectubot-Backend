import { Request, Response } from "express";
import {
  getAllAuthorsService,
  getAuthorByIdService,
  postAuthorService,
  editAuthorByIdService,
  deleteAuthorByIdService,
} from "../services/authors.service";

export const getAllAuthorsController = async (req: Request, res: Response) => {
  try {
    const allAuthors = await getAllAuthorsService();
    res.json({ allAuthors });
  } catch (e) {
    res.json(e);
  }
};

export const getAuthorByIdController = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.id;
    const authorFound = await getAuthorByIdService(authorId);

    res.json({ authorFound });
  } catch (e) {
    res.json(e);
  }
};

export const postAuthorController = async (req: Request, res: Response) => {
  try {
    const newAuthor = req.body;
    const authorCreated = await postAuthorService(newAuthor);

    res.json({ authorCreated });
  } catch (e) {
    res.json(e);
  }
};

export const editAuthorByIdController = async (req: Request, res: Response) => {
  try {
    const updatedAuthor = req.body;
    const authorId = req.params.id;
    const authorSuccessfullyUpdated = await editAuthorByIdService(authorId, updatedAuthor);

    res.json({ authorSuccessfullyUpdated });
  } catch (e) {
    res.json(e);
  }
};

export const deleteAuthorByIdController = async (req: Request, res: Response) => {
  try {
    const authorId = req.params.id;
    const authorDeleted = deleteAuthorByIdService(authorId);

    res.json({ authorDeleted });
  } catch (e) {
    res.json(e);
  }
};
