const Review = require('../models/ReviewModel');

const ReviewController = {
  createReview: async (req, res) => {
    try {
      const { product, rating, comment } = req.body;
      const newReview = await Review.create({
        user: req.userId,
        product,
        rating,
        comment,
      }); //user để truoecs product
      res.status(201).json(newReview);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateReview: async (req, res) => {
    try {
      const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedReview) {
        return res.status(404).json({ message: 'Review not found' });
      }
      res.json(updatedReview);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteReview: async (req, res) => {
    try {
      const deletedReview = await Review.findByIdAndDelete(req.params.id);
      if (!deletedReview) {
        return res.status(404).json({ message: 'Review not found' });
      }
      res.json({ message: 'Review deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getReviewDetails: async (req, res) => {
    try {
      const review = await Review.findById(req.params.id);
      if (!review) {
        return res.status(404).json({ message: 'Review not found' });
      }
      res.json(review);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  getAllReviews: async (req, res) => {
    try {
      const reviews = await Review.find();
      res.json(reviews);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};

module.exports = ReviewController;
