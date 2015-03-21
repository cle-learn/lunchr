'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Betterify = new Module('betterify');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Betterify.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Betterify.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Betterify.menus.add({
    title: 'betterify example page',
    link: 'betterify example page',
    roles: ['authenticated'],
    menu: 'main'
  });

  Betterify.aggregateAsset('css', 'betterify.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Betterify.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Betterify.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Betterify.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Betterify;
});
