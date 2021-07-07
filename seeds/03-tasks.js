
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('tasks').insert([
        { id: 1, 
          description: 'paint', 
          notes: 'every class', 
          completed: false,
          projects_id: 1,
         },
         { id: 2, 
          description: 'clean', 
          notes: 'school hall ', 
          completed: false,
          projects_id: 2,
         },
         { id: 3, 
          description: 'install ', 
          notes: 'metal bars', 
          completed: false,
          projects_id: 3,
         },
         { id: 4, 
          description: 'paint', 
          notes: 'every class', 
          completed: false,
          projects_id: 3,
         },
         { id: 5, 
          description: 'clean', 
          notes: 'school hall ', 
          completed: false,
          projects_id: 1,
         },
      ]);
      
};
