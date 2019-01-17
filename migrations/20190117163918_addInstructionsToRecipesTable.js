
exports.up = function(knex, Promise) {
  return knex.schema.table('recipes', tbl => {
      tbl.string('instructions', 255);
  });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropColumnIfExists('instructions');
};
