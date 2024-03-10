// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Use body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create comments array
var comments = [
    { name: "John", comment: "Hello World" },
    { name: "Tim", comment: "Hello World" },
    { name: "Sandy", comment: "Hello World" }
];