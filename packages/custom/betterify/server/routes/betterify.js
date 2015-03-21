'use strict';

var mongoose = require('mongoose');
var Day = mongoose.model('Day');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Betterify, app, auth, database) {

  app.post('/betterify/day', function(req, res, next) {
    var day = new Day(req.body);
    day.save(function(err, day) {
      if (err) { return next(err); }
      console.log("saved day", day);
    });
    res.send();
  });

  // Get all days
  app.get('/betterify/day', /* auth.requiresLogin, */function(req, res, next) {
    Day.find(function(err, days) {
      res.json(days)
    });
  });

  app.param('day', /* auth.requiresLogin, */function(req, res, next, id) {
    var query = Day.findById(id);
    query.exec(function(err, day) {
      if (err) { return next(err); }
      if (!day) { return next(new Error('Cant find post')); }

      req.day = day;
      return next();
    })
  });

  // Get day
  app.get('betterify/day/:day', function(req, res, next) {
    res.json(req.day);
  });

  app.get('/betterify/example/render', function(req, res, next) {
    Betterify.render('index', {
      package: 'betterify'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
