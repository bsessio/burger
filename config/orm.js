// Require Connection file.
const connection = require("./connection");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  let arr = [];

  // Loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];
    // Check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // If string has spaces, add quotations
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // Add the = value to make it a viable key interaction.
      arr.push(key + "=" + value);
    }
  }

  // Translate array of strings to a single comma-separated string
  return arr.toString();
}

// HHost all ORM functions.
let orm = {
  // Review all of a given table.
  selectAll: function(tableInput, cb) {
    let queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // I kind of just made this simpler for me, but inserts new burgers into the burger database,
    //  pending value entered.
  insertOne: function(vals, cb) {
    let queryString = "INSERT INTO burgers ('burger_name') VALUES ('";
    queryString += vals;
    queryString += "') ";
    console.log(queryString);
    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },

  // Updates a mySQL entry based on certain variable conditions.
  updateOne: function(table, objColVals, condition, cb) {
    let queryString = "UPDATE " + table;
    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;
    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Package it up for use elsewhere.
module.exports = orm;
