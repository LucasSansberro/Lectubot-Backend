import { deleteById, editById, getAll, getById, post } from "../database/mongoDAO.js";
import { IUser, User } from "../models/Schemas/User.js";

export const getAllUsersService = async () => {
  try {
    return await getAll(User);
  } catch (e) {
    throw "Error getting all users: " + e;
  }
};

export const getUserByIdService = async (id: string | Express.User) => {
  try {
    return await getById(User, id);
  } catch (e) {
    throw "Error getting an user by ID: " + e;
  }
};

export const editUserByIdService = async (id: string, updatedUser: IUser) => {
  try {
    return await editById(User, id, updatedUser);
  } catch (e) {
    throw "Error updating an user by ID: " + e;
  }
};

export const deleteUserByIdService = async (id: string) => {
  try {
    return await deleteById(User, id);
  } catch (e) {
    throw "Error deleting an user by ID: " + e;
  }
};
