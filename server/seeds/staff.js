const faker = require('faker');
const bcrypt = require('bcrypt');

var password_digest = bcrypt.hashSync('password', 10);

var getDepartments = (knex) => {
  return knex.select().table('entities')
}

var createStaff = (knex, id) => {
  var firstname = faker.name.firstName();
  var lastname = faker.name.lastName();

  return knex('entities').insert({
    email: faker.internet.email(),
    password_digest,
    firstname,
    lastname,
    fullname: firstname + ' ' + lastname,
    designation: faker.name.jobTitle(),
    isstaff: true
  })
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('entities').del()
    .then(function () {
      let records = [];

      for (let i = 0; i < 50; i ++) {
        records.push(createStaff(knex, i))
      }

      return Promise.all(records);
    });
};
