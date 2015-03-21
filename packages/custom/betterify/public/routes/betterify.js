'use strict';

angular.module('mean.betterify').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('betterify example page', {
      url: '/betterify/example',
      templateUrl: 'betterify/views/index.html'
    });
  }
]);
