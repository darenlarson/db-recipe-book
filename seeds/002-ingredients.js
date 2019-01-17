
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {name: 'ground beef'},
        {name: 'cheese'},
        {name: 'corn shells'},
        {name: 'sausages'},
        {name: 'tomato paste'},
        {name: 'hot sauce'},
        {name: 'onions'},
        {name: 'red peppers'},
        {name: 'salt'},
        {name: 'black pepper'},
      ]);
    });
};
