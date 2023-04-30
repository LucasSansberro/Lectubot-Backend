import mongoose from "mongoose";

export const getAll = async (model: mongoose.Model<any>) => {
  try {
    return await model.find().lean();
  } catch (e) {
    throw "Error in the DB while getting all objects: " + e;
  }
};

export const getById = async (model: mongoose.Model<any>, id: string) => {
  try {
    return await model.findById(id).lean();
  } catch (e) {
    throw "Error in the DB while getting an object by ID: " + e;
  }
};

export const getByValue = async (model: mongoose.Model<any>, value: object) => {
  try {
    return await model.findOne(value);
  } catch (e) {
    throw "Error in the DB while getting an object by value: " + e;
  }
};

export const post = async (model: mongoose.Model<any>, object: any) => {
  try {
    const postedObject = new model(object);
    return await postedObject.save();
  } catch (e) {
    throw "Error in the DB while posting an object: " + e;
  }
};

export const editById = async (model: mongoose.Model<any>, id: string, object: any) => {
  try {
    return await model.findOneAndUpdate(
      { _id: id },
      {
        $set: object,
      }
    );
  } catch (e) {
    throw "Error in the DB while updating an object by ID: " + e;
  }
};

export const deleteById = async (model: mongoose.Model<any>, id: string) => {
  try {
    await model.deleteOne({ _id: id });
    return "Object deleted";
  } catch (e) {
    throw "Error in the DB while deleting an object by ID: " + e;
  }
};
