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
    return db("schemes").where("id", id).first();
}
function findSteps(id) {
    return db("steps")
        .where("scheme_id", id)
        .join("schemes", "steps.scheme_id", "schemes.id")
        .select(
            "steps.id",
            "steps.instructions",
            "steps.step_number",
            "scheme_name"
        )
        .orderBy("steps.step_number");
}
function add(data) {
    return db("schemes").insert(data, "*");
}
function addStep(stepData, id) {}
function update(changes, id) {
    return db("schemes").where({ id }).first().update(changes);
}
function remove(id) {
    return db("schemes").where({ id }).first().del();
}
