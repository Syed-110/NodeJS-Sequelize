const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
const db = require("./server");
const bookRoutes = require("./controller/book-controller");

//Middleware
app.use("/api/books", bookRoutes);

db.query("SELECT 1")
  .then((result) => {
    app.listen(3000, () => {
      console.log("Listening on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
