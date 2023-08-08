const express = require("express");
const router = express.Router();
const bookService = require("../service/book-service");

router.get("/create", async (req, res) => {
  await bookService.createTable();
  res.json("Book table created successfully!");
});

router.post("/addBook", async (req, res) => {
  const book = await bookService.addBook(req.body);
  res.json("Book Added Successfully");
});

router.get("/", async (req, res) => {
  const book = await bookService.getAllBook();
  if (book.length > 0) {
    res.json(book);
  } else {
    res.json("No Books Found");
  }
});

router.get("/:id", async (req, res) => {
  const book = await bookService.getBookById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.json("No Book Found");
  }
});

router.delete("/:id", async (req, res) => {
  const book = await bookService.getBookById(req.params.id);
  if (book) {
    bookService.deleteBookById(req.params.id);
    res.json("Book Deleted Successfully");
  } else {
    res.json("No Book Found");
  }
});

module.exports = router;
