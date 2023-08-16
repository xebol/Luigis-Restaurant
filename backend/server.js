require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const http = require("http");
const server = http.createServer(app);

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use(bodyParser.json());

const customerApiRoutes = require("./routes/customers-api");
const orderApiRoutes = require("./routes/orders-api");
const reviewApiRoutes = require("./routes/reviews-api");

app.use("/api/customers", customerApiRoutes);
app.use("/api/orders", orderApiRoutes);
app.use("/api/reviews", reviewApiRoutes);

server.listen(PORT, (err) => {
  if (err) console.log("Error message: ", err);
  console.log(`Server is listening on port: ${PORT}`);
});
