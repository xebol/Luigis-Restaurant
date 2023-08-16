const client = require("../connection");

//Get all orders
const getOrders = () => {
  return client
    .query("SELECT * FROM orders")
    .then((orders) => {
      return orders.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};

//Create a new order
const addOrder = (order) => {
  return client
    .query(
      `INSERT INTO orders (customer_id, total_price) VALUES ($1, $2) RETURNING *`,
      [order.customer_id, order.total_price]
    )
    .then((order) => {
      return order.rows[0];
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { getOrders, addOrder };
