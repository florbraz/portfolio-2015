define([
	'app',
	'ng-dialog', 
	'factory-resources', 
	'factory-myProcesses',
	'directive-taskFilter',
	'factory-user'
	
	], function(app){
	
	app = angular.module('app', ['ngDialog', 'ngRoute']);
	
	app.controller('MyProcessesCtrl', function($scope, Resources, Processes, TaskFilter){
		
		
		$scope.TaskFilter = TaskFilter.data;
		
		$scope.myProcesses = Processes.modules.myProcesses;
		
		$scope.showDepartmentProcesses = function(){			
			
			this.processListVisible = !this.processListVisible;
			
			return this.processListVisible;
		};
		
		$scope.myProcesses.get()
			.then(function(response){
				$scope.myProcesses.data = response.data;
			});
	});
	
	app.controller('ProcessViewCtrl', function($scope, Resources, User, Processes, ngDialog, $routeParams){
		
		$scope.myProcesses = Processes.modules.myProcesses;		
		$scope.User = User.modules;
		
		$scope.UserData = {};				
		$scope.selectedStepActivities = null;
		$scope.activity = null;
		$scope.newMessages = [];
		
		$scope.loadStepActivities = function(step){
			$scope.selectedStepActivities = step.activities;
			$scope.activity = null;
		};
		
		$scope.loadActivity = function(activity){
			$scope.activity = activity;
		};
		
		$scope.loadSubActivity = function(subActivity){
			$scope.sub_activity = subActivity;
		};
		
		$scope.openNewMessageDialog = function(){
			ngDialog.open({
				template : 'js/application-angular/view/include/add-message.html',
				controller: 'MessagesCtrl',
				preCloseCallback: function(){
					
					if(typeof $scope.myProcesses.new !== 'undefined'){
					
						var d = new Date();
						var sent_on = d.getDate() + '/' + d.getMonth() + '/' + d.getFullYear(); 
	
						$scope.newMessages.push({
							from : $scope.UserData.name,
							message : $scope.myProcesses.new,
							sent_on : sent_on
						});
						
						$scope.myProcesses.new = undefined;
					}
    			}
			});
		};		
					
		$scope.User.get()
			.then(function(response){
				$scope.UserData = response.data;
			});		
			
		$scope.myProcesses.view($routeParams.id)
			.then(function(response){
				$scope.myProcesses.viewData = response.data;				
			});					
	});
	
	app.controller('NewProcessCtrl', function($scope, Processes){
		
		$scope.processModels = Processes.modules.processModels;
		
		$scope.processModels.viewData = {};
		
		$scope.processModels.get()
			.then(function(response){
				$scope.processModels.viewData = response.data;
			});
		
	});
	
	app.controller('MessagesCtrl', function($scope, Processes){
		
		$scope.myProcesses = Processes.modules.myProcesses;
		
		$scope.add = function(message){
			
			$scope.myProcesses.messages.add(message)
				.then(function(response){
					if(typeof $scope.closeThisDialog === 'function'){
						$scope.myProcesses.new = message;
						$scope.closeThisDialog(0);	
					}
				});	
		};
	});
});