define([
	'app', 
	'factory-resources', 
	'factory-myTasks',
	'directive-taskFilter',
	'factory-taskFilter'
	
	], function(app){
	
	app.controller('MyTeamCtrl', function($scope, Resources, Tasks, TaskFilter){
		
		$scope.myTeam = Tasks.modules.myTeam;
		
		$scope.TaskFilter = TaskFilter.data;
		
		$scope.showUserTasks = function(){			
			
			this.taskListVisible = !this.taskListVisible;
			
			return this.taskListVisible;
		};
		
		$scope.myTeam.get()
			.then(function(response){
				$scope.myTeam.data = response.data;
			});
	});
	
	app.controller('MyTasksCtrl', function($scope, Resources, Tasks, TaskFilter){
		
		Resources.init()
			.then(function(response){
				$scope.resources = response.data;
			});
		
		$scope.myTasks = Tasks.modules.myTasks;
		
		$scope.TaskFilter = TaskFilter.data;
		
		$scope.myTasks.get()
			.then(function(response){
				$scope.myTasks.data = response.data;
			});
	});
});