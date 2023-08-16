const express = require("express");
const router = express.Router();
const reviewQueries = require("../db/queries/reviews");

//Get all reviews 
router.get("/", (req, res) => {
  reviewQueries
    .getReviews()
    .then((reviews) => {
      console.log(reviews);
      return res.json({ reviews });
    })
    .catch(() => {
      res.status(500).json({ error: err.message });
    });
});

//Write a new review
router.post("/", (req, res) => {
  const newReview = req.body;
  reviewQueries
    .writeReview(newReview)
    .then((review) => {
      console.log(review);
      return res.json({ review });
    })
    .catch(() => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;