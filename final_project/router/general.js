const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

public_users.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check if both username and password are provided
    if (username && password) {
        // Check if the user does not already exist
        if (!isValid(username)) {
            // Add the new user to the users array
            users.push({"username": username, "password": password});
            return res.status(200).json({message: "Public User successfully registered!"});
        } else {
            return res.status(404).json({message: "Public User already exists!"});
        }
    }
    // Return error if username or password is missing
    return res.status(404).json({message: "Unable to register user."});
});

// Get the book list available in the shop
public_users.get('/', function (req, res) {
    return res.send(JSON.stringify(books, null, 4));
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn', function (req, res) {
    const isbn = req.params.isbn
    return res.send(JSON.stringify(books[isbn], null, 4));
});

// Get book details based on author
public_users.get('/author/:author', function (req, res) {
    const author = req.params.author
    var to_ret = {};
    for (var isbn in books) {
        if (books.hasOwnProperty(isbn)) {
            if (books[isbn]["author"] === author) {
                to_ret[isbn] = books[isbn];
            }
        }
    }
    return res.send(JSON.stringify(to_ret, null, 4));
});

// Get all books based on title
public_users.get('/title/:title', function (req, res) {
    const title = req.params.title
    var to_ret = {};
    for (var isbn in books) {
        if (books.hasOwnProperty(isbn)) {
            if (books[isbn]["title"] === title) {
                to_ret[isbn] = books[isbn];
            }
        }
    }
    return res.send(JSON.stringify(to_ret, null, 4));
});

//  Get book review
public_users.get('/review/:isbn', function (req, res) {
    const isbn = req.params.isbn
    return res.send(JSON.stringify(books[isbn]["reviews"], null, 4));
});

module.exports.general = public_users;
