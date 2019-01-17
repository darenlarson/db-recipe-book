
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {name: 'tex-mex', dish_id: 2, instructions: 'Preheat the oven at 400 degrees'},
        {name: 'deep dish', dish_id: 1, instructions: 'Preheat the oven at 425 degrees'},
        {name: 'thin crust', dish_id: 1, instructions: 'Preheat the oven at 450 degrees'},
      ]);
    });
};
