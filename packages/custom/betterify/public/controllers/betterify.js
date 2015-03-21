'use strict';

/* jshint -W098 */
angular.module('mean.betterify').controller('BetterifyController', ['$scope', 'Global', 'Betterify',
  function($scope, Global, Betterify) {
    $scope.global = Global;
    $scope.package = {
      name: 'betterify'
    };
  }
]);
