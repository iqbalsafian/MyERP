const bcrypt = require('bcrypt');

var password_digest = bcrypt.hashSync('thisisanonentrypassword', 10);

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entities').del()
    .then(() => { // Inserts seed entries
      return knex('entities').insert(
        {fullname: 'Administration', isdepartment: true, email: 'No-email1', password_digest}
      );
    })
    .then(() => { // Inserts seed entries
      return knex('entities').insert(
        {fullname: 'Human Resource', isdepartment: true, email: 'No-email2', password_digest}
      );
    })
    .then(() => { // Inserts seed entries
      return knex('entities').insert(
        {fullname: 'Sales & Marketing', isdepartment: true, email: 'No-email3', password_digest}
      );
    })
    .then(() => { // Inserts seed entries
      return knex('entities').insert(
        {fullname: 'Finance', isdepartment: true, email: 'No-email4', password_digest}
      );
    })
};
