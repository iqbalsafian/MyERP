const faker = require('faker');
const bcrypt = require('bcrypt');

createDepartment = (knex, id) => {
  return knex('entities').insert({
    fullname: faker.commerce.department,
    password_digest: bcrypt.hashSync('password', 10),
    email: 'exampledept@example.com',
    isdepartment: true
  })
}

exports.seed = function(knex, Promise) {
  let records = []

  for (i = 0; i < 7; i++) {
    records.push(createDepartment(knex, i));
  }

  return Promise.all(records);
};
