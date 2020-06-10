const db = require("../data/connection");
module.exports = {
    find,
    findById,
    findSteps,
    add,
    // addStep,
    update,
    remove,
};

function find() {
    return db("schemes");
}
function findById(id) {}
function findSteps(id) {}
function add(data) {}
function update(id) {}
function remove(id) {}
