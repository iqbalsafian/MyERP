const faker = require('faker');
const bcrypt = require('bcrypt');

var getDepartments = (knex) => {
  return knex.select().table('entities')
}

var createStaff = (knex, department_num) => {
  var firstname = faker.name.firstName();
  var lastname = faker.name.lastName();

  return knex('entities').insert({
    email: faker.internet.email(),
    password_digest: bcrypt.hashSync('password', 10),
    firstname,
    lastname,
    fullname: firstname + ' ' + lastname,
    designation: faker.name.jobTitle(),
    isstaff: true,
    department_num,
    is_allowed_to_login: true
  })
}

exports.seed = function(knex, Promise) {
  return knex('entities')
    .select('fullname')
    .where('isdepartment', true)
    .pluck('id')
    .then(departmentList => {
      let records = [];

      for (let i = 0; i < 100; i++) {
        records.push(createStaff(knex, departmentList[Math.floor(Math.random()*departmentList.length)]))
      }
      return Promise.all(records);
    })
};
