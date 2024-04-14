const Review = require("../models/ReviewModel");

const createReview = async (reviewData) => {
  try {
    const newReview = await Review.create(reviewData);
    return {
      status: "OK",
      message: "Review created successfully",
      data: newReview,
    };
  } catch (error) {
    throw error;
  }
};

const updateReview = async (id, reviewData) => {
  try {
    const updatedReview = await Review.findByIdAndUpdate(id, reviewData, { new: true });
    if (!updatedReview) {
      throw new Error('Review not found');
    }
    return {
      status: "OK",
      message: "Review updated successfully",
      data: updatedReview,
    };
  } catch (error) {
    throw error;
  }
};

const deleteReview = async (id) => {
  try {
    const deletedReview = await Review.findByIdAndDelete(id);
    if (!deletedReview) {
      throw new Error('Review not found');
    }
    return {
      status: "OK",
      message: "Review deleted successfully",
    };
  } catch (error) {
    throw error;
  }
};

const getReviewDetails = async (id) => {
  try {
    const review = await Review.findById(id);
    if (!review) {
      throw new Error('Review not found');
    }
    return {
      status: "OK",
      message: "Review details found",
      data: review,
    };
  } catch (error) {
    throw error;
  }
};

const getAllReviews = async () => {
  try {
    const reviews = await Review.find();
    return {
      status: "OK",
      message: "All reviews found",
      data: reviews,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createReview,
  updateReview,
  deleteReview,
  getReviewDetails,
  getAllReviews,
};
