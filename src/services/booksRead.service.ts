import { deleteById, editById, getAll, getById, post } from "../database/mongoDAO.js";
import { BookRead, IBookRead } from "../models/Schemas/BookRead.js";

export const getBooksReadService = async () => {
  try {
    return await getAll(BookRead);
  } catch (e) {
    throw "Error getting all readed books: " + e;
  }
};

export const getBookReadByIdService = async (id: string) => {
  try {
    return await getById(BookRead, id);
  } catch (e) {
    throw "Error getting a readed book by ID: " + e;
  }
};

export const postBookReadService = async (newReadedBook: IBookRead) => {
  try {
    return await post(BookRead, newReadedBook);
  } catch (e) {
    throw "Error creating a readed book: " + e;
  }
};

export const editBookReadByIdService = async (id: string, updatedBookRead: IBookRead) => {
  try {
    return await editById(BookRead, id, updatedBookRead);
  } catch (e) {
    throw "Error updating a readed book by ID: " + e;
  }
};

export const deleteBookReadByIdService = async (id: string) => {
  try {
    return await deleteById(BookRead, id);
  } catch (e) {
    throw "Error deleting a readed book by ID: " + e;
  }
};
