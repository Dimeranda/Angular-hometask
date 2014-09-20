'use strict';

/**
 * @ngdoc function
 * @name angularHometaskApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularHometaskApp
 */
angular.module('angularHometaskApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
