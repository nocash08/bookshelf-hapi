const { addBookHandler } = require("./handler/add.book.handler");
const {
  deleteBookByIdHandler,
} = require("./handler/delete.book.by.id.handler");
const { editBookByIdHandler } = require("./handler/edit.book.by.id.handler");
const { getAllBookHandler } = require("./handler/get.all.book.handler");
const { getBookByIdHandler } = require("./handler/get.book.by.id.handler");

const routes = [
  {
    method: "GET",
    path: "/books",
    handler: getAllBookHandler,
  },
  {
    method: "GET",
    path: "/books/{bookId}",
    handler: getBookByIdHandler,
  },
  {
    method: "POST",
    path: "/books",
    handler: addBookHandler,
  },
  {
    method: "PUT",
    path: "/books/{bookId}",
    handler: editBookByIdHandler,
  },
  {
    method: "DELETE",
    path: "/books/{bookId}",
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
