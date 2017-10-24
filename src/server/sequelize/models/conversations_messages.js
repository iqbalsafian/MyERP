'use strict';
module.exports = (sequelize, DataTypes) => {
  var conversations_messages = sequelize.define('conversation_messages', {
    conversation_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return conversations_messages;
};
