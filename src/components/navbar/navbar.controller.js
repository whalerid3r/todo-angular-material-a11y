'use strict';

angular.module('todo')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
  });
