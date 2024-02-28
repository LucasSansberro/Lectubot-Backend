import { Request, Response } from "express";
import {
  getAllAuthorsNameAndIdService,
  getAuthorByIdService,
  postAuthorService,
  editAuthorByIdService,
  deleteAuthorByIdService,
} from "../services/authors.service.js";
import { AuthorName, IAuthor } from "../models/Schemas/Author.js";
import { APIResponse } from "../models/APIResponse.js";

export const getAllAuthorsNameAndIdController = async (req: Request, res: Response) => {
  try {
    const authorsNameAndId = await getAllAuthorsNameAndIdService();
    const response: APIResponse<AuthorName[]> = { success: true, data: [...authorsNameAndId], error: null };
    res.json({ ...response });
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
