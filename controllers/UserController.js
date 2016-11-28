var User = require('../models/User');

module.exports = {
  find: function (params, callback) {
    User.find(params, function(err, users){
      if (err) {
          callback(err, null);
          return;
      }
      callback(null, users);
    });
  },

  findById: function (id, callback) {
    User.findById(id, function(err, zone){
      if (err) {
         callback(err, null);
      }
      callback(null, zone);
    });
  },

  create: function(params, callback) {
    User.create(params, function(err, user){
      if (err) {
         callback(err, null);
         return;
      }
      callback(null, user);
    });
  },
  update: function () {

  },


  delete: function () {

  }
};
