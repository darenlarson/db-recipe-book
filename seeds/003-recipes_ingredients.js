
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients')
        .insert([
          {recipe_id: 1, ingredients_id: 2, quantity: 13},
          {recipe_id: 1, ingredients_id: 4, quantity: 3},
          {recipe_id: 1, ingredients_id: 5, quantity: 12.2},
          {recipe_id: 1, ingredients_id: 6, quantity: 11},
          {recipe_id: 1, ingredients_id: 10, quantity: 11.5},
          {recipe_id: 1, ingredients_id: 2, quantity: 5.3},
          {recipe_id: 2, ingredients_id: 9, quantity: 2}
      ]);
    });
};
