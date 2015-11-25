'use strict';

/* Controllers */
define(["angular.min"], function() {

var portfolioApp = angular.module('portfolioApp', ['ngSanitize']);

portfolioApp.controller('WorksCtrlr', function($scope, $http) {
	var urlJsonWorks = "json/works.json";

  //$http.get('').
  $http.get(urlJsonWorks).
    success(function(data, status, headers, config) {
      $scope.works = data.list;
    }).
    error(function(data, status, headers, config) {
      // log error
      console.log(status);
    });
});

});