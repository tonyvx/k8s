var express = require('express');
var router = express.Router();
var dbo = require("../db/conn");
const cors = require('cors');
// var ObjectID = require('mongodb').ObjectID;
const { ObjectId } = require('bson');
var path = require('path');
const corsOptions = {
  origin: 'http://localhost:3000',
}
/* GET home page. */
router.get('/', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendfile(path.join(__dirname, 'public', 'index.html'));
});

// This section will help you create a new document.
router.get("/registrations", cors(corsOptions), function (req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("registrations").find({})
    .toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
      res.send(result);
    });
});

// This section will help you create a new document.
router.post("/registrations", cors(corsOptions), function (req, res) {
  const dbConnect = dbo.getDb();

  dbConnect
    .collection("registrations")
    .insertOne(req.body, function (err, result) {
      if (err) {
        res.status(400).send("Error inserting registrations!");
      } else {
        console.log(`Added a new registrations with id ${result.insertedId}`);
        res.send(result);
      }
    });
});


// This section will help you update a record.
router.post("/registrations/:id", cors(corsOptions), (req, res) => {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: new ObjectId(req.params.id) };

  dbConnect
    .collection("registrations")
    .updateOne(listingQuery, { $set: req.body }, function (err, _result) {
      if (err) {
        res.status(400).send(`Error updating listing with id ${listingQuery._id}!`);
      } else {
        console.log("1 document updated");
        res.send(_result);
      }
    });
});

// This section will help you delete a record.
router.delete("/registrations/:id", cors(corsOptions), (req, res) => {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: new ObjectId(req.params.id) };
  dbConnect
    .collection("registrations").find({}).toArray(function (err, result) {
      if (err) throw err;
      console.log(result);
    });
  dbConnect
    .collection("registrations")
    .deleteOne(listingQuery, function (err, _result) {
      if (err) {
        res.status(400).send(`Error deleting listing with id ${listingQuery.listing_id}!`);
      } else {
        console.log("1 document deleted");
        res.send(_result);
      }
    });
});




module.exports = router;
