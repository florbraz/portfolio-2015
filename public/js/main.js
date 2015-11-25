define([
	'angularAMD', 
	'routes', 
	'angular-route', 
	'directive-sidebar', 
	'factory-sidebar'
	], function(angularAMD, Routes){
	
	var app = angular.module('app', ['ngRoute']);
	
	app.config(function($routeProvider){
		$routeProvider
			.when('/',
				{redirectTo : '/'})
			.when('/works',
				angularAMD.route(Routes.Works))
			.when('/work/:id',
				angularAMD.route(Routes.Work))
			.when('/blog',
				angularAMD.route(Routes.Blog))
			.when('/blog/:id',
				angularAMD.route(Routes.BlogPost))
			.otherwise(Routes.NotFound)
	});
			
	return angularAMD.bootstrap(app);
	
});