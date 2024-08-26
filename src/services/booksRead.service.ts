import { deleteById, editById, getAll, getById, getByValue, post } from "../database/mongoDAO.js";
import { BookReadStatus } from "../models/Enum/BookReadStatus.js";
import { BookRead, IBookRead } from "../models/Schemas/BookRead.js";

export const getBooksReadService = async (): Promise<IBookRead[]> => {
  try {
    return await getAll(BookRead);
  } catch (e) {
    throw "Error getting all read books: " + e;
  }
};

export const getBookReadByIdService = async (id: string): Promise<IBookRead> => {
  try {
    return await getById(BookRead, id);
  } catch (e) {
    throw "Error getting a read book by ID: " + id + e;
  }
};

export const getBooksReadByValueService = async (type: string, id: string | Express.User, status?: string): Promise<IBookRead[]> => {
  try {
    if (type == "user") {
      if (status == undefined) {
        return await getByValue(BookRead, { user_id: id }, { path: "book_id", select: "_id title author cover" });
      } else {
        return await getByValue(BookRead, { user_id: id, status }, { path: "book_id", select: "_id title author cover" });
      }
    } else if (type == "book") {
      return await getByValue(BookRead, { book_id: id });
    }
    return [];
  } catch (e) {
    throw "Error getting read books from the database: " + e;
  }
};

export const postBookReadService = async (newReadedBook: IBookRead): Promise<IBookRead> => {
  try {
    return await post(BookRead, newReadedBook);
  } catch (e) {
    throw "Error creating a read book: " + e;
  }
};

export const editBookReadByIdService = async (id: string, updatedBookRead: IBookRead): Promise<IBookRead> => {
  try {
    return await editById(BookRead, id, updatedBookRead);
  } catch (e) {
    throw "Error updating a read book by ID: " + e;
  }
};

export const deleteBookReadByIdService = async (id: string): Promise<string> => {
  try {
    return await deleteById(BookRead, id);
  } catch (e) {
    throw "Error deleting a read book by ID: " + e;
  }
};
