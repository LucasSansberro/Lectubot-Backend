import User from "../models/User.js";

export const getAllUsersService = async () => {
  try {
    return await User.find().lean();
  } catch (e) {
    throw "Error finding all users";
  }
};

export const getOwnUserservice = async (id: Express.User) => {
  try {
    return await User.findById(id).lean();
  } catch (e) {
    throw "Error finding a user";
  }
};
