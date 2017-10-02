'use strict';
module.exports = (sequelize, DataTypes) => {
  var conversations_participants = sequelize.define('conversation_participants', {
    conversation_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return conversations_participants;
};
