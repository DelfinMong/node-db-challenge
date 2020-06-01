// const knex = require("knex");
// const config = require("../knexfile");
const db = require('../data/db.config.js');

module.exports = {
  findProject,
  addProject,
//   findResource,
//   addResource,
//   findTask
};

// method to get the projects (All)
function findProject() {
  return db("Projects");
}

function addProject(body) {
  return db("projects")
        .insert(body);
}