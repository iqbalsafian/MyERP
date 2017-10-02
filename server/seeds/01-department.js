const faker = require('faker');
const bcrypt = require('bcrypt');

var createDepartment = (knex, id) => {
  return knex('entities').insert({
    fullname: faker.commerce.department(),
    email: faker.internet.email(),
    isdepartment: true
  })
}

exports.seed = function(knex, Promise) {
  return knex('entities').del()
    .then(function () {
      let records = []

      for (i = 0; i < 7; i++) {
        records.push(createDepartment(knex, i));
      }
      return Promise.all(records);
    })
};
