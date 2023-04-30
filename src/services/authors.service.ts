import { deleteById, editById, getAll, getById, post } from "../database/mongoDAO.js";
import { Author, IAuthor } from "../models/Schemas/Author.js";


export const getAllAuthorsService = async () => {
  try {
    return await getAll(Author);
  } catch (e) {
    throw "Error getting all authors: " + e;
  }
};

export const getAuthorByIdService = async (id: string) => {
  try {
    return await getById(Author, id);
  } catch (e) {
    throw "Error getting an author by ID: " + e;
  }
};

export const postAuthorService = async (newAuthor: IAuthor) => {
  try {
    return await post(Author, newAuthor);
  } catch (e) {
    throw "Error creating an author: " + e;
  }
};

export const editAuthorByIdService = async (id: string, updatedAuthor: IAuthor) => {
  try {
    return await editById(Author, id, updatedAuthor);
  } catch (e) {
    throw "Error updating an author by ID: " + e;
  }
};

export const deleteAuthorById = async (id: string) => {
  try {
    return await deleteById(Author, id);
  } catch (e) {
    throw "Error deleting an author by ID: " + e;
  }
};