const db = require('../data/db.config.js');

module.exports = {
  addTask,
  findTask
};

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