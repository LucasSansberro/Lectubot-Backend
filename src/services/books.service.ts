import { Book, IBook } from "../models/Schemas/Book.js";

export const getAllBooksService = async () => {
  try {
    return await Book.find().lean();
  } catch (e) {
    throw "Error getting all books";
  }
};

export const getBookByIdService = async (id: string) => {
  try {
    return await Book.findById(id).lean();
  } catch (e) {
    throw "Error getting a book by ID";
  }
};

export const postBookService = async (book: IBook) => {
  try {
    const test = new Book(book) 
    return await test.save()
  } catch (e) {
    throw "Error getting a book by ID";
  }
};

getBookByIdService("644c564b14f75475086084e8").then((res)=> console.log(res) );
