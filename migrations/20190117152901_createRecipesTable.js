
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipes', tbl => {
        tbl.increments();
        tbl.string('name', 255);
        tbl.integer('dish_id').unsigned().references('id').inTable('dishes');
        tbl.timestamps(true, true);

        tbl.unique('name', 'uq_recipes_name');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipes');
};
