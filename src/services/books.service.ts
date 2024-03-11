import { deleteById, editById, getAll, getById, getByValue, post } from "../database/mongoDAO.js";
import { Book, IBook } from "../models/Schemas/Book.js";

export const getBooksService = async (): Promise<IBook[]> => {
  try {
    return await getAll(Book);
  } catch (e) {
    throw "Error getting all books: " + e;
  }
};

export const getBookByIdService = async (id: string): Promise<IBook> => {
  try {
    return await getById(Book, id);
  } catch (e) {
    throw "Error getting a book by ID: " + e;
  }
};

export const getBooksByValueService = async (type: string, id: any): Promise<IBook[]> => {
  try {
    if (type == "author") {
      return await getByValue(Book, { "author._id": id });
    }
    return [];
  } catch (e) {
    throw "Error getting read books from the database: " + e;
  }
};

export const postBookService = async (newBook: IBook): Promise<IBook> => {
  try {
    return await post(Book, newBook);
  } catch (e) {
    throw "Error creating a book: " + e;
  }
};

export const editBookByIdService = async (id: string, updatedBook: IBook): Promise<IBook> => {
  try {
    return await editById(Book, id, updatedBook);
  } catch (e) {
    throw "Error updating a book by ID: " + e;
  }
};

export const deleteBookByIdService = async (id: string): Promise<string> => {
  try {
    return await deleteById(Book, id);
  } catch (e) {
    throw "Error deleting a book by ID: " + e;
  }
};
