var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require('mongodb');

var app = express();

var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/simplecrud';

var articleItems = [];

var findArticles = function(db, callback) {
   var cursor = db.collection('articles').find().sort( { "title":1 } );
   

   cursor.each(function(err, doc) {
      if (doc != null) {
         articleItems.push(doc);
      } else {
         callback();
      }
   });
};


var addArticle = function(db, callback) {

};

MongoClient.connect(url, function(err, db) {
  findArticles(db, function() {
      db.close();
  });
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}' - ${JSON.stringify(req.body)}`);
	next();
});

app.use(express.static("./public"));

//GET
app.get("/dictionary-api", function(req, res) {
	res.json(articleItems);
});

//POST
app.post("/dictionary-api", function(req, res) {
    addArticle(req.body);
    res.json(articleItems);
}); 

/*
app.delete("/dictionary-api/:term", function(req, res) {
    articleItems = articleItems.filter(function(definition) {
        return definition.term.toLowerCase() !== req.params.term.toLowerCase();
    });
    res.json(articleItems);
}); */

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;