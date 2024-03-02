import { deleteById, editById, getAll, getById, post } from "../database/mongoDAO.js";
import { BookRead, IBookRead } from "../models/Schemas/BookRead.js";

export const getBooksReadService = async () => {
  try {
    return await getAll(BookRead);
  } catch (e) {
    throw "Error getting all read books: " + e;
  }
};

export const getBookReadByIdService = async (id: string) => {
  try {
    return await getById(BookRead, id);
  } catch (e) {
    throw "Error getting a read book by ID: " + id + e;
  }
};

export const getBooksReadByUserOrBookIdService = async (type: string, id: string): Promise<IBookRead[]> => {
  try {
    let booksRead: IBookRead[] = [];
    if (type == "user") {
      booksRead = await BookRead.find({ user_id: id }).lean().populate({path:'book_id',select:'_id title author cover'})
    } else if (type == "book") {
      booksRead = await BookRead.find({ book_id: id });
    }
    return booksRead;
  } catch (e) {
    throw "Error getting read books from the database: " + e;
  }
};
const test = await getBooksReadByUserOrBookIdService("user", "644718d95e3a21c0cbb32210");
console.log(test)
export const postBookReadService = async (newReadedBook: IBookRead) => {
  try {
    return await post(BookRead, newReadedBook);
  } catch (e) {
    throw "Error creating a read book: " + e;
  }
};

export const editBookReadByIdService = async (id: string, updatedBookRead: IBookRead) => {
  try {
    return await editById(BookRead, id, updatedBookRead);
  } catch (e) {
    throw "Error updating a read book by ID: " + e;
  }
};

export const deleteBookReadByIdService = async (id: string) => {
  try {
    return await deleteById(BookRead, id);
  } catch (e) {
    throw "Error deleting a read book by ID: " + e;
  }
};
