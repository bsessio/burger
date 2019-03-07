// Requires ORM.
const orm = require('../config/orm');

// Burger-specific uses of the ORM functions.
const burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },
    insertOne: function(vals, cb) {
        orm.insertOne(vals, function(res) {
            cb(res);
        })
    },
    // For some reason this one gave me some frustration, so I just simplified the ORM.
    updateOne: function(condition, cb) {
        orm.updateOne("burgers", {devoured: true}, condition, function(res){
            cb(res);
        })
    }
}
// Packages burger up for use!
module.exports = burger;