const { Book } = require("../model/book-model");

module.exports.createTable = async () => {
  try {
    await Book.sync();
    return "Table created successfully";
  } catch (error) {
    console.log("Failed to create table : ", error);
    return error;
  }
};
module.exports.addBook = async (bookData) => {
  try {
    const { title, author, release_date, subject } = bookData;
    const result = await Book.create({
      title: title,
      author: author,
      release_date: release_date,
      subject: subject,
    });
    return result.dataValues;
  } catch (error) {
    console.log("Failed to add a new book : ", error);
    return error;
  }
};
module.exports.updateBook = async (bookData,id) => {
  try {
    const { title, author, release_date, subject } = bookData;
    const result = await Book.update({
      title: title,
      author: author,
      release_date: release_date,
      subject: subject,
    },
    {
      where: {
        id: id,
      },
    });
    return "Record updated successfully";
  } catch (error) {
    console.log("Failed to update a book : ", error);
    return error;
  }
};
module.exports.getAllBook = async () => {
  try {
    const books = await Book.findAll();
    return books;
  } catch (error) {
    console.log("Failed to get all books : ", error);
    return error;
  }
};
module.exports.getBookById = async (id) => {
  try {
    const books = await Book.findOne({
      where: {
        id: id,
      },
    });
    return books;
  } catch (error) {
    console.log("Failed to get a book : ", error);
    return error;
  }
};
module.exports.deleteBookById = async (id) => {
  try {
    await Book.destroy({
      where: {
        id: id,
      },
    })
    return "Book deleted successfully";
  } catch (error) {
    console.log("Failed to delete a book : ", error);
    return error;
  }
};
