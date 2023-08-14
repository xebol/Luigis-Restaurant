const express = require("express");
const router = express.Router();
const customerQueries = require("../db/queries/customers");

router.get("/", (req, res) => {
  customerQueries
    .getAllCustomers()
    .then((customers) => {
      res.json({ customers });
    })
    .catch(() => {
      res.status(500).json({ error: err.message });
    });
});


module.exports = router;