const db = require("../data/connection");

module.exports = {
  add,
  find,
  remove,
  update,
};

function find() {
  return db("cars");
}

function add(car) {
  return db("cars")
    .insert(car, "id")
    .then(([id]) => findById(id));
}

function findById(id) {
  return db("cars").where({ id }).first();
}

function remove(id) {
  return db("cars").where({ id }).delete();
}

function update(id, car) {
  return db("cars").where({ id }).update(car);
}
