import { Request, Response } from "express";
import {
  deleteAuthorByIdService,
  editAuthorByIdService,
  getAuthorByIdService,
  getAuthorsNameAndIdService,
  postAuthorService,
} from "../services/authors.service.js";
import { AuthorName, IAuthor } from "../models/Schemas/Author.js";

export const getAuthorsNameAndIdController = async (req: Request, res: Response) => {
  try {
    const authorsNameAndId: AuthorName[] = await getAuthorsNameAndIdService();
    res.json({ success: true, data: [...authorsNameAndId], error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const getAuthorByIdController = async (req: Request, res: Response) => {
  try {
    const authorId: string = req.params.id;
    const authorFound: IAuthor = await getAuthorByIdService(authorId);
    res.json({ success: true, data: { ...authorFound }, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const postAuthorController = async (req: Request, res: Response) => {
  try {
    const newAuthor: IAuthor = req.body;
    const authorCreated: IAuthor = await postAuthorService(newAuthor);

    res.json({ success: true, data: { ...authorCreated }, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const editAuthorByIdController = async (req: Request, res: Response) => {
  try {
    const updatedAuthor: IAuthor = req.body;
    const authorId: string = req.params.id;
    const authorSuccessfullyUpdated: IAuthor = await editAuthorByIdService(authorId, updatedAuthor);

    res.json({ success: true, data: { ...authorSuccessfullyUpdated }, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};

export const deleteAuthorByIdController = async (req: Request, res: Response) => {
  try {
    const authorId: string = req.params.id;
    const authorDeleted: string = await deleteAuthorByIdService(authorId);

    res.json({ success: true, data: authorDeleted, error: null });
  } catch (error) {
    res.json({ success: false, data: null, error }).status(400);
  }
};
