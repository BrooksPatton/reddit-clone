
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
        {
          votes: 35,
          url: 'http://www.google.com',
          title: 'Yo, its google'
        },
        {
          url: 'http://www.yahoo.com',
          votes: 14,
          title: 'Yo, its yahoo'
        },
        {
          votes: -34,
          url: 'http://www.twitch.tv',
          title: 'Yo, its time to watch games online'
        },
      ]);
    });
};
