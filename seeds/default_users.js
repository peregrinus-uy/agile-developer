exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'John Doe', email: 'john@example.com'},
        {id: 2, name: 'Jane Roe', email: 'jane@example.com'}
      ]);
    });
};
