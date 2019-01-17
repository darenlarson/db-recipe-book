
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes_ingredients', tbl => {
        tbl.increments();
        tbl.integer('recipe_id').unsigned().references('id').inTable('recipes');
        tbl.integer('ingredients_id').unsigned().references('id').inTable('ingredients');
        tbl.float('quantity');
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes_ingredients');
};
