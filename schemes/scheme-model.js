const db = require("../data/connection");
module.exports = {
    find,
    findById,
    findSteps,
    add,
    addStep,
    update,
    remove,
};

function find() {
    return db("schemes");
}
function findById(id) {
    return db("schemes").where("id", id);
}
function findSteps(id) {
    return db("steps").where("scheme_id", id);
}
function add(data) {
    return db("schemes").insert(data, "*");
}
function addStep(stepData, id) {}
function update(changes, id) {
    db("schemes").where(id).update(changes);
}
function remove(id) {
    db("schemes").where("id", id).del();
}
