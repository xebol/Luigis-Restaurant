const client = require("../connection");

//Get all reviews
const getReviews = () => {
  return client
    .query("SELECT * FROM reviews")
    .then((reviews) => {
      return reviews.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};


//Write a new review
const writeReview = (review) => {
  return client
    .query(
      `INSERT INTO reviews (customer_id, message, rating, created_at) VALUES ($1, $2, $3, $4) RETURNING *`, [review.customer_id, review.message, review.rating, review.created_at]
    )
    .then((review) => {
      return review.rows[0];
    })
    .catch((err) => {
      console.log(err);
    });
};


module.exports = { getReviews, writeReview };