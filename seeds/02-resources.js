exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('resource').insert([
        {id: 1, name: 'Phone', description: 'Apple'},
        {id: 2, name: 'Computer', description: 'Dell'},
        {id: 3, name: 'Car', description: 'Nissan'},
        
      ]);
};
