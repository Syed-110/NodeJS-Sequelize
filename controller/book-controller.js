const express = require("express");
const router = express.Router();
const bookService = require("../service/book-service");

router.get("/create", async (req, res) => {
  await bookService.createTable();
  res.json("Book table created successfully!");
});

router.post("/addBook", async (req, res) => {
  const book = await bookService.addBook(req.body);
  res.json(book);
});

router.put("/updateBook/:id", async (req, res) => {
  const bookById = await bookService.getBookById(req.params.id);
  if (bookById) {
    const book = await bookService.updateBook(req.body, req.params.id);
    res.json(book);
  } else {
    res.json(`No Book Found To Update For Id ${req.params.id}.`);
  }
});

router.get("/", async (req, res) => {
  const book = await bookService.getAllBook();
  if (book.length > 0) {
    res.json(book);
  } else {
    res.json("No Books Found.");
  }
});

router.get("/:id", async (req, res) => {
  const book = await bookService.getBookById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.json("No Book Found.");
  }
});

router.delete("/:id", async (req, res) => {
  const book = await bookService.getBookById(req.params.id);
  if (book) {
    const book_msg = await bookService.deleteBookById(req.params.id);
    res.json(book_msg);
  } else {
    res.json("No Book Found To Delete.");
  }
});

module.exports = router;
