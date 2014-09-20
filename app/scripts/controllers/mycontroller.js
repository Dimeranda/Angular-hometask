'use strict';

/**
 * @ngdoc function
 * @name angularHometaskApp.controller:MycontrollerCtrl
 * @description
 * # MycontrollerCtrl
 * Controller of the angularHometaskApp
 */
angular.module('angularHometaskApp')
  .controller('MycontrollerCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
