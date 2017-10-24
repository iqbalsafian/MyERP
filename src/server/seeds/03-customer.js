const faker = require('faker');
const bcrypt = require('bcrypt');

var createCustomer = (knex, id) => {
  return knex('entities').insert({
    fullname: faker.company.companyName(),
    password_digest: bcrypt.hashSync('password', 10),
    email: faker.internet.email(),
    address1: faker.address.streetName(),
    address2: faker.address.streetAddress(),
    postcode: faker.address.zipCode(),
    city: faker.address.city(),
    state: faker.address.state(),
    country: faker.address.country(),
    iscustomer: true
  })
}

exports.seed = function(knex, Promise) {
  let records = [];

  for (let i = 0; i < 100; i++) {
    records.push(createCustomer(knex, i))
  }

  return Promise.all(records)
};
