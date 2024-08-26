import { deleteById, editById, getAll, getById, post } from "../database/mongoDAO.js";
import { IReview, Review } from "../models/Schemas/Review.js";

export const getReviewsService = async (): Promise<IReview[]> => {
  try {
    return await getAll(Review);
  } catch (e) {
    throw "Error getting all reviews: " + e;
  }
};

export const getReviewByIdService = async (id: string): Promise<IReview> => {
  try {
    return await getById(Review, id);
  } catch (e) {
    throw "Error getting a review by ID: " + e;
  }
};

export const postReviewService = async (newReview: IReview): Promise<IReview> => {
  try {
    return await post(Review, newReview);
  } catch (e) {
    throw "Error creating a review: " + e;
  }
};

export const editReviewByIdService = async (id: string, updatedReview: IReview): Promise<IReview> => {
  try {
    return await editById(Review, id, updatedReview);
  } catch (e) {
    throw "Error updating a review by ID: " + e;
  }
};

export const deleteReviewByIdService = async (id: string): Promise<string> => {
  try {
    return await deleteById(Review, id);
  } catch (e) {
    throw "Error deleting a review by ID: " + e;
  }
};
