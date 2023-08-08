const { Book } = require("../model/book-model");
// const db = require('../server');

module.exports.createTable = async () => {
  Book.sync()
    .then(() => {
      console.log("Book table created successfully!");
    })
    .catch((error) => {
      console.error("Unable to create table : ", error);
      throw error;
    });
};
module.exports.addBook = async (bookData) => {
  const { title, author, release_date, subject } = bookData;
  Book.create({
    title: title,
    author: author,
    release_date: release_date,
    subject: subject,
  })
    .then((res) => {
      console.log("Book Added Successfully");
    })
    .catch((error) => {
      console.error("Failed to add a new book : ", error);
    });
};
module.exports.getAllBook = async () => {
  const books = await Book.findAll();
  return books;
};
module.exports.getBookById = async (id) => {
  const books = await Book.findOne({
    where: {
      id: id,
    },
  });
  return books;
};
module.exports.deleteBookById = async (id) => {
  const books = await Book.destroy({
    where: {
      id: id,
    },
  })
  .then((res) => {
    console.log("Book Deleted Successfully");
  })
  .catch((error) => {
    console.error("Failed to delete a book : ", error);
  });
};
