// const knex = require("knex");
// const config = require("../knexfile");
const db = require('../data/db.config.js');

module.exports = {
  findProject,
  addProject,
  findById,
  addTask,
  findTask
};

// method to get the projects (All)
function findProject() {
  return db("Projects");
}


function findById (id) {
  return db('Projects')
       .where({id})
       .first()
}

function addProject(body) {
  return db("Projects")
        .insert(body);
}

function addTask(task) {
  return db('tasks')
			.insert(task)
}

function findTask (id) {
  return db
   .select("t.*", 'p.name','p.description')
   .from('tasks as t')
   .join('projects as p', 't.projects_id', 'p.id')
   .orderBy('t.id')
}

