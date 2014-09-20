'use strict';

/**
 * @ngdoc function
 * @name angularHometaskApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularHometaskApp
 */
angular.module('angularHometaskApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
