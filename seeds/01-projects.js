
exports.seed = function(knex) {
  // Deletes ALL existing entries
      return knex('projects').insert([
        {id: 1,
         name: 'House',
         description:'City',
         completed:'false'
        },
        {id: 2,
         name: 'Apartment',
         description:'Low Income',
         completed:'false'
        },
        {id: 3,
         name: 'School',
         description:'Ivy League',
         completed:'false'
        },
      ]);
};
