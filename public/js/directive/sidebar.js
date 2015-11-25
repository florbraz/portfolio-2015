define(['angularAMD', 'factory-taskFilter'], function(app){
	
	app.directive('sidebar', function(Sidebar, $location, $rootScope, $routeParams, TaskFilter){
		return{
			restrict: 'E',
			templateUrl: 'js/application-angular/view/include/sidebar.html',
			link: function(scope){
				
				scope.sidebarLinks = {};
				scope.amounts = {};
				scope.TaskFilter = TaskFilter;
				
				scope.currentPage = $location.path();
				
				$rootScope.$on('$routeChangeSuccess', function (e, current, pre) {
					
					scope.currentPage = $location.path();
					scope.language = $routeParams.language;	
					scope.TaskFilter.data.status = $routeParams.status;
				});
				
				Sidebar.links.get()
					.then(function(response){
						scope.sidebarLinks = response.data;
					});
					
				Sidebar.amounts.get()
					.then(function(response){
						scope.amounts = response.data;
					});
			}
		}
	});	
});