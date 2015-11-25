define(['app'], function(app){
	
	app = angular.module('app', ['ngRoute']);
	
	app.factory('Resources', function($http, $rootScope, $routeParams){
		
		var scope = $rootScope.$new(this);
		
		scope.init = function(){
			
			return $http.get('js/application-angular/json/resources_' + (typeof $routeParams.language === 'undefined' ? 'en' : $routeParams.language) + '.json')
				.then(function(data){
					return data;
				});
		};
		
		return scope;
		
	});
});