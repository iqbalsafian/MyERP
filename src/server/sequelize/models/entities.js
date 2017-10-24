'use strict';
module.exports = (sequelize, DataTypes) => {
  var Entities = sequelize.define('entities', {
    id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Entities;
};
