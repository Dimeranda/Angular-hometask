'use strict';

/**
 * @ngdoc filter
 * @name angularHometaskApp.filter:myFilter
 * @function
 * @description
 * # myFilter
 * Filter in the angularHometaskApp.
 */
angular.module('angularHometaskApp')
  .filter('myFilter', function () {
    return function (input) {
      return 'myFilter filter: ' + input;
    };
  });
