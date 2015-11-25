define(['angularAMD'], function(app){
	
	app.factory('TaskFilter', function($rootScope, $http, $routeParams){
		
		var TaskFilter = $rootScope.$new(this);
		
		TaskFilter.data = {
			status : $routeParams.status
		};
		
		return TaskFilter;
		
	});
});