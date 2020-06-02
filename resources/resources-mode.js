// const knex = require("knex");
// const config = require("../knexfile");
const db = require('../data/db.config.js');

module.exports = {
  find,
  addProject,
  findByProjectId
};

function find() {
  return db("resource");
}

function findByProjectId (id) {
  return db('resource')
    .where(id)
    .first()
}

function addProject(body) {
  return db("resource")
        .insert(body)
}