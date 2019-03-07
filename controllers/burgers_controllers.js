// Sets up requires, and references models, and establishes router.
const express = require('express');
const burgers = require('../models/burger');
const router = express.Router();

// Create all our routes and set up logic within those routes where required.

// Basic page, which loads all current burgers.
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    let hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// The route for burger addition.
router.post("/api/burgers/:name", function(req, res) {
  let name = req.params.name;
  burgers.insertOne(name, 
    function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

// The route for burger devouring (updating condition from false to true of burger devoured)
router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burgers.updateOne(condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
