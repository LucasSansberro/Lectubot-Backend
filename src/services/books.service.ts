import { deleteById, editById, getAll, getById, post } from "../database/mongoDAO.js";
import { Book, IBook } from "../models/Schemas/Book.js";

export const getAllBooksService = async () => {
  try {
    return await getAll(Book);
  } catch (e) {
    throw "Error getting all books: " + e;
  }
};

export const getBookByIdService = async (id: string) => {
  try {
    return await getById(Book, id);
  } catch (e) {
    throw "Error getting a book by ID: " + e;
  }
};

export const postBookService = async (newBook: IBook) => {
  try {
    return await post(Book, newBook);
  } catch (e) {
    throw "Error creating a book: " + e;
  }
};

export const editBookByIdService = async (id: string, updatedBook: IBook) => {
  try {
    return await editById(Book, id, updatedBook);
  } catch (e) {
    throw "Error updating a book by ID: " + e;
  }
};

export const deleteBookById = async (id: string) => {
  try {
    return await deleteById(Book, id);
  } catch (e) {
    throw "Error deleting a book by ID: " + e;
  }
};
