'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Betterify, app, auth, database) {

  app.get('/betterify/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/betterify/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/betterify/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
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
