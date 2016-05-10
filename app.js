"use strict";
/* globals require, console, module */
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require('mongodb');
var app = express();

var url = 'mongodb://localhost:27017/simplecrud';
var MongoClient = mongodb.MongoClient;
var db = '';

MongoClient.connect(url, function (err, database) {
    if (err) {
        return console.log(err);
    }
    db = database;
    app.listen(3000, function (){
        console.log('listening on 3000');
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* makes it so you can access external js libraries in the node_modules directory */
app.use("/node_modules", express.static('node_modules'));
app.use(express.static("./public"));

/* GET articles page */
app.get('/articles', function(req, res) {
    db.collection('articles').find().toArray(function(err, results) {
        res.json(results);
    });
});

/* POST to articles page */
app.post('/articles', function(req, res) {
    db.collection('articles').insert(req.body);
});

/* GET articles page */
app.get('/admin', function(req, res) {
    db.collection('articles').find().toArray(function(err, results) {
        res.sendFile(__dirname + '/public/admin.html');
    });
});

exports.closeServer = function(){
  server.close();
};

module.exports = app;