const client = require("../../connection");

//get all customers
const getAllCustomers = function() {
  return client
    .query("SELECT * FROM customers")
    .then((customers) => {
      return customers.rows;
    })
    .catch((err) => {
      console.log(err);
    });
};


module.exports = { getAllCustomers };
