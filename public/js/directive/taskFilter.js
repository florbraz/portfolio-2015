define(['app'], function(app){
	
	app.directive('taskfilter', function(Sidebar, $location, $rootScope, $routeParams, TaskFilter){
		
		return{
			restrict: 'E',
			templateUrl: 'js/application-angular/view/include/task-filter.html',
			link: function(scope, element, attrs){
				
				scope.list = attrs['list'];
				
				scope.filterLinks = {};				
				
				scope.currentPage = $location.path();
				
				$rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
					
					scope.currentPage = $location.path();
					
					TaskFilter.data.status = $routeParams.status;
				});
				
				Sidebar.links.get()
					.then(function(response){
						scope.filterLinks = response.data[scope.list].subLinks;
					});
			}
		}
	});	
});