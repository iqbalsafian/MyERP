'use strict';
module.exports = (sequelize, DataTypes) => {
  var conversations = sequelize.define('conversations', {
    conversationtype: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return conversations;
};
