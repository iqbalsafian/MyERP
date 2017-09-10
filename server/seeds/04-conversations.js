var getStaff = (knex) => {
  return knex('entities')
    .select('id')
    .pluck('id')
    .where('isstaff', true)
    .then(staffList => {
      return staffList
    })
    .catch(err => {
      console.log('error: ' + err);
    })
}

var createConversation = (knex) => {
  return knex('conversations').insert({})
    .returning('id')
    .then(id => {
      
    })
}

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  let staffList = getStaff(knex);
  console.log(staffList);
};
