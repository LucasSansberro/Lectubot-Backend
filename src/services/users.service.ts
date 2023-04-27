import User from "../models/User.js";

export const getUsuarioService = async (id: Express.User) => {
  try {
    return await User.findOne({ _id: id});
  } catch (e) {
    throw "Error finding a user";
  }
};
