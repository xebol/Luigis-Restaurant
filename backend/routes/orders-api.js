const express = require("express");
const router = express.Router();
const orderQueries = require("../db/queries/orders");

//Get all orders
router.get("/", (req, res) => {
  orderQueries
    .getOrders()
    .then((orders) => {
      console.log(orders);
      return res.json({ orders });
    })
    .catch(() => {
      res.status(500).json({ error: err.message });
    });
});

//Create a new order
router.post("/", (req, res) => {
  const newOrder = req.body;
  orderQueries
    .addOrder(newOrder)
    .then((order) => {
      console.log(order);
      return res.json({ order });
    })
    .catch(() => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
